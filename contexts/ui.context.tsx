// @ts-nocheck
import React, { useContext, useReducer } from "react";

export interface State {
  displayMobileMenu: boolean;
  displaySidebar: boolean;
  displayFilter: boolean;
  displayModal: boolean;
  displayConfirmationModal: boolean;
  displayCart: boolean;
  displayDrawer: boolean;
  displaySearch: boolean;
  modalView: string;
  confirmationModalView: string;
  modalData: any;
  confirmationModalData: null | confirmationModalDataType;
  drawerView: string | null;
  toastText: string;
  toastList: []
}

const initialState = {
  displayMobileMenu: true,
  displaySidebar: false,
  displayFilter: false,
  displayModal: false,
  displayConfirmationModal: false,
  displayCart: false,
  displayDrawer: false,
  displaySearch: false,
  modalView: "LOGIN_VIEW",
  confirmationModalView: "CONFIRMATION_MODAL_VIEW",
  drawerView: null,
  modalData: null,
  confirmationModalData: null,
  toastText: "",
  toastList: []
};

export type ToastType = {
  id: number,
  toastType: string,
  text: string
}

export type confirmationModalDataType = null | {questionText: string, perfomedFunction: () => any}

type Action =
  | {
      type: "SET_AUTHORIZED";
    }
  | {
      type: "SET_UNAUTHORIZED";
    }
  | {
      type: "OPEN_SIDEBAR";
    }
  | {
      type: "CLOSE_SIDEBAR";
    }
  | {
      type: "OPEN_CART";
    }
  | {
      type: "CLOSE_CART";
    }
  | {
      type: "OPEN_SEARCH";
    }
  | {
      type: "OPEN_DRAWER";
    }
  | {
      type: "CLOSE_DRAWER";
    }
  | {
      type: "CLOSE_SEARCH";
    }
  | {
      type: "SET_TOAST_TEXT";
      text: ToastText;
    }
  | {
      type: "OPEN_FILTER";
    }
  | {
      type: "CLOSE_FILTER";
    }
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "OPEN_CONFIRMATION_MODAL";
    }
  | {
      type: "CLOSE_CONFIRMATION_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_CONFIRMATION_MODAL_VIEW";
      view: CONFIRMATION_MODAL_VIEWS;
    }
  | {
      type: "SET_DRAWER_VIEW";
      view: DRAWER_VIEWS;
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    }
  | {
      type: "SET_CONFIRMATION_MODAL_DATA";
      data: any;
    }
  | {
      type: "SET_USER_AVATAR";
      value: string;
    }
  | {
      type: "ADD_TOAST";
      toast: ToastType;
    }
  | {
      type: "DELETE_TOAST";
      id: number;
    }
  | {
      type: "OPEN_MOBILE_MENU";
    }
  | {
      type: "CLOSE_MOBILE_MENU";
    }

type MODAL_VIEWS =
  | "SIGN_UP_VIEW"
  | "LOGIN_VIEW"
  | "ORDER_POPUP"
  | "CONFIRMATION_MODAL_VIEW"
  | "PRODUCT_VIEW"
  | "ADD_PRODUCT_VIEW"
  | "UPDATE_PRODUCT_VIEW"
  | "ADD_DEPARTMENT_VIEW"
  | "UPDATE_DEPARTMENT_VIEW";

  
type CONFIRMATION_MODAL_VIEWS = "CONFIRMATION_MODAL_VIEW";

type DRAWER_VIEWS = "CART_SIDEBAR" | "MOBILE_MENU";
type ToastText = string;

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_AUTHORIZED": {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    case "SET_UNAUTHORIZED": {
      return {
        ...state,
        isAuthorized: false,
      };
    }
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        displaySidebar: false,
        drawerView: null,
      };
    }
    case "OPEN_CART": {
      return {
        ...state,
        displayCart: true,
      };
    }
    case "CLOSE_CART": {
      return {
        ...state,
        displayCart: false,
      };
    }
    case "OPEN_DRAWER": {
      return {
        ...state,
        displayDrawer: true,
      };
    }
    case "CLOSE_DRAWER": {
      return {
        ...state,
        displayDrawer: false,
      };
    }
    case "CLOSE_SEARCH": {
      return {
        ...state,
        displaySearch: false,
      };
    }
    case "OPEN_FILTER": {
      return {
        ...state,
        displayFilter: true,
      };
    }
    case "CLOSE_FILTER": {
      return {
        ...state,
        displayFilter: false,
      };
    }
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "OPEN_MOBILE_MENU": {
      return {
        ...state,
        displayMobileMenu: true,
      };
    }
    case "CLOSE_MOBILE_MENU": {
      return {
        ...state,
        displayMobileMenu: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "OPEN_CONFIRMATION_MODAL": {
      return {
        ...state,
        displayConfirmationModal: true,
        displaySidebar: false,
      };
    }
    case "CLOSE_CONFIRMATION_MODAL": {
      return {
        ...state,
        displayConfirmationModal: false,
      };
    }
    case "SET_CONFIRMATION_MODAL_VIEW": {
      return {
        ...state,
        confirmationModalView: action.view,
      };
    }
    case "SET_DRAWER_VIEW": {
      return {
        ...state,
        drawerView: action.view,
      };
    }
    case "SET_MODAL_DATA": {
      return {
        ...state,
        modalData: action.data,
      };
    }
    case "SET_CONFIRMATION_MODAL_DATA": {
      return {
        ...state,
        confirmationModalData: action.data,
      };
    }
    case "SET_TOAST_TEXT": {
      return {
        ...state,
        toastText: action.text,
      };
    }
    case "SET_USER_AVATAR": {
      return {
        ...state,
        userAvatar: action.value,
      };
    }
    case "ADD_TOAST": {
      const toast = action.toast
      let newToastList: ToastType[] = []
      newToastList.unshift(toast)

      return {
        ...state,
        toastList: [...state.toastList, ...newToastList]
      }
    }
    case 'DELETE_TOAST':
      let newToastList = state.toastList.filter((e) => {
        return action.id !== e.id 
      })
      return {
        ...state,
        toastList: [...newToastList]
      }
  }
}

export const UIProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const authorize = () => dispatch({ type: "SET_AUTHORIZED" });
  const unauthorize = () => dispatch({ type: "SET_UNAUTHORIZED" });
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
  const toggleSidebar = () => state.displaySidebar ? dispatch({ type: "CLOSE_SIDEBAR" }) : dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebarIfPresent = () => state.displaySidebar && dispatch({ type: "CLOSE_CART" });
  const openCart = () => dispatch({ type: "OPEN_CART" });
  const closeCart = () => dispatch({ type: "CLOSE_CART" });
  const toggleCart = () => state.displaySidebar ? dispatch({ type: "CLOSE_CART" }) : dispatch({ type: "OPEN_CART" });
  const closeCartIfPresent = () => state.displaySidebar && dispatch({ type: "CLOSE_CART" });

  const openFilter = () => dispatch({ type: "OPEN_FILTER" });
  const closeFilter = () => dispatch({ type: "CLOSE_FILTER" });

  const openMobileMenu = () => dispatch({ type: "OPEN_MOBILE_MENU" });
  const closeMobileMenu = () => dispatch({ type: "CLOSE_MOBILE_MENU" });

  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
  const openSearch = () => dispatch({ type: "OPEN_SEARCH" });
  const closeSearch = () => dispatch({ type: "CLOSE_SEARCH" });

  const openConfirmationModal = () => dispatch({ type: "OPEN_CONFIRMATION_MODAL" });
  const closeConfirmationModal = () => dispatch({ type: "CLOSE_CONFIRMATION_MODAL" });
  const setConfirmationModalView = (view: CONFIRMATION_MODAL_VIEWS) => dispatch({ type: "SET_CONFIRMATION_MODAL_VIEW", view });
  const setConfirmationModalData = (data: confirmationModalDataType) => dispatch({ type: "SET_CONFIRMATION_MODAL_DATA", data });

  const openDrawer = () => dispatch({ type: "OPEN_DRAWER" });
  const closeDrawer = () => dispatch({ type: "CLOSE_DRAWER" });

  const setUserAvatar = (_value: string) =>
    dispatch({ type: "SET_USER_AVATAR", value: _value });

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: "SET_MODAL_VIEW", view });
  const setDrawerView = (view: DRAWER_VIEWS) =>
    dispatch({ type: "SET_DRAWER_VIEW", view });
  const setModalData = (data: any) =>
    dispatch({ type: "SET_MODAL_DATA", data });

  const addToast = (toast: ToastType) => dispatch({type: 'ADD_TOAST', toast})
  const deleteToast = (id: number) => dispatch({type: 'DELETE_TOAST', id})

  const value = React.useMemo(
    () => ({
      ...state,
      authorize,
      unauthorize,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openCart,
      closeCart,
      toggleCart,
      closeCartIfPresent,
      openFilter,
      closeFilter,
      openModal,
      closeModal,
      openMobileMenu,
      closeMobileMenu,
      openDrawer,
      closeDrawer,
      openSearch,
      closeSearch,
      setModalView,
      setDrawerView,
      setUserAvatar,
      setModalData,
      addToast,
      deleteToast,
      openConfirmationModal,
      closeConfirmationModal,
      setConfirmationModalView,
      setConfirmationModalData,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: React.FC = ({ children }) => (
  // <CartProvider>
    <UIProvider>{children}</UIProvider>
  // </CartProvider>
);
