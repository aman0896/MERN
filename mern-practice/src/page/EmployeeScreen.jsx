import React from "react";

export default function EmployeeScreen() {
    return (
        <div className="container">
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }}
            >
                logout
            </button>
        </div>
    );
}
