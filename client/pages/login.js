import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";


const Login = () => {
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("miraculous");
    const [loading, setLoading] = useState(false);
    
    const Router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:8000/api/login", { email, password });
            
            setEmail("");
            setPassword("");
            setLoading(false);
            // Router.push("/");
            console.log(data);
        } catch (err) {
            toast.error(err.response.data);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row py-1 bg-default-image text-dark">
                <div className="col text-center my-auto">
                    <h1>Login</h1>
                </div>
            </div>

            {loading ? <h1>loading</h1> : ""}


            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <AuthForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        page="login"
                    />

                </div>
            </div>


            <div className="row">
                <div className="col">
                    <p className="text-center">Not yet registered?{" "}
                    <Link href="/register">
                        Register
                    </Link></p>

                </div>
            </div>
        </div>
    )
}

export default Login;