import { useEffect } from "react";
import { useContext, useRef } from "react"
import { NavContext } from "../context/NavContext";
import { useOnScreen } from "./useOnScreen";

export const useNav = (navLinkID) => {
    const ref = useRef(null);
    const { setActiveLinkID } = useContext(NavContext);

    const isOnScreen = useOnScreen(ref);
    useEffect(() => {
        if(isOnScreen) {
            setActiveLinkID(navLinkID);
        }
    }, [isOnScreen, setActiveLinkID, navLinkID]);

    return ref;
}