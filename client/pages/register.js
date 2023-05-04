
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";



const Register = () => {
    const [userName, setName] = useState("test");
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("miraculous");
    const [secret, setSecret] = useState("black");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);
    const Register = () => {

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:8000/api/register", { userName, email, password, secret });
            setName("");
            setEmail("");
            setPassword("");
            setSecret("");
            console.log(data.ok);
            setOk(data === 'User created');
            setLoading(false);
        } catch (err) {
            toast.error(err.response.data);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row py-1 bg-default-image text-dark">
                <div className="col text-center my-auto">
                    <h1>Register</h1>
                </div>
            </div>

            {loading ? <h1>loading</h1> : ""}


            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <AuthForm
                        handleSubmit={handleSubmit}
                        userName={userName}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}
                        page="register"
                    />

                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Modal
                        title="Congratulations!"
                        open={ok}
                        onCancel={() => setOk(false)}
                        footer={null}
                    >
                        <p>You have successfully registered</p>
                        <Link href="/login" className="btn btn-primary">
                            Login
                        </Link>
                    </Modal>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="text-center">Aleardy registered?{" "}
                    <Link href="/login">
                        Login
                    </Link></p>

                </div>
            </div>
        </div>
    )
}

export default Register;