import React from "react";
import './user.css'

export default function User() {
    return (
        <form>
            <label>

                <input type="text" name="name" placeholder="username" />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    )
}