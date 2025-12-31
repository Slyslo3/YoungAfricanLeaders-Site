import * as React from "react";
import { ToastProvider } from "./toast";

// --- Types de base pour le Toast (Doit être en dehors de useToast pour l'exportation) ---

const TOAST_LIMIT = 1; // Limite le nombre de toasts affichés simultanément
const TOAST_REMOVE_DELAY = 1000000; // Un délai très long pour que l'éditeur Netlify ne supprime pas les toasts (sinon ils disparaissent trop vite dans certains environnements)

type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  variant?: "default" | "destructive";
  duration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type ActionType =
  | { type: "ADD_TOAST"; toast: Toast }
  | { type: "UPDATE_TOAST"; toast: Partial<Toast> }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

// --- State Management ---

let memoryState: { toasts: Toast[] } = { toasts: [] };
const listeners: ((state: typeof memoryState) => void)[] = [];

function reducer(state: typeof memoryState, action: ActionType): typeof memoryState {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // Note: S'il n'y a pas d'ID, on ferme tous les toasts
      if (toastId) {
        // Option 1: Marquer un toast comme fermé
        return {
          ...state,
          toasts: state.toasts.map((t) =>
            t.id === toastId ? { ...t, open: false } : t
          ),
        };
      } else {
        // Option 2: Marquer tous les toasts comme fermés
        return {
          ...state,
          toasts: state.toasts.map((t) => ({
            ...t,
            open: false,
          })),
        };
      }
    }

    case "REMOVE_TOAST":
      if (!action.toastId) return state;
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
}

// Fonction utilitaire pour générer un ID unique
let count = 0;
function generateId() {
  count = (count + 1) % 1000;
  return String(count);
}

// Fonction pour émettre les changements
function dispatch(action: ActionType) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

// --- Public API ---

const useToast = () => {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  const toast = React.useCallback((props: Omit<Toast, "id">) => {
    const id = generateId();

    const update = (props: Partial<Toast>) =>
      dispatch({ type: "UPDATE_TOAST", toast: { ...props, id } });
    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open) => {
          if (!open) {
            dismiss();
          }
        },
      },
    });

    return {
      id,
      dismiss,
      update,
    };
  }, []);

  // Nettoyage après fermeture du toast
  React.useEffect(() => {
    state.toasts
      .filter((t) => t.open === false)
      .forEach((t) => {
        setTimeout(() => {
          dispatch({ type: "REMOVE_TOAST", toastId: t.id });
        }, TOAST_REMOVE_DELAY);
      });
  }, [state.toasts]);


  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
};

export { useToast, ToastProvider };
