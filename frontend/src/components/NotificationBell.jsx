import { useWebSocket } from "../context/WebSocketContext";
import { useNavigate } from "react-router-dom";

const NotificationBell = () => {
    const { notifications } = useWebSocket();
    const navigate = useNavigate();

    return (
        <div className="relative cursor-pointer" onClick={() => navigate("/notifications")}>
            <span className="text-xl">🔔</span>
            {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                    {notifications.length}
                </span>
            )}
        </div>
    );
};

export default NotificationBell;
