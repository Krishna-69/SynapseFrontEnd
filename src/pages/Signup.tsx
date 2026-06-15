import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const navigate = useNavigate();

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        if (!usernameRef.current || !passwordRef.current) {
            return;
        }

        try {
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });
            alert("You have signed up");
            navigate("/signin");
        } catch (error) {
            console.error(error);
            alert("Signup failed");
        }
    };



    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl min-w-48 flex flex-col gap-2 p-4">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button onClick={handleSubmit} loading={false} variant="primary" text="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    )
}