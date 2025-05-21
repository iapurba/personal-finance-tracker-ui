import { redirect } from "react-router-dom";

export function requiredLogin() {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return redirect("/login");
    }
    return null;
};