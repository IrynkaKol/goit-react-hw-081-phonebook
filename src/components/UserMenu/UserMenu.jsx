import { useAuth } from "components/hooks";
import { useDispatch } from "react-redux"

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth;

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button onClick={() => dispatch()} type="button">Logout</button>
        </div>
    )
}