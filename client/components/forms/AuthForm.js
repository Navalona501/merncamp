import { SyncOutlined } from "@ant-design/icons";


const AuthForm = ({
    handleSubmit,
    userName,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    secret,
    setSecret,
    loading,
    page
}) => {
    return (
        <form onSubmit={handleSubmit}>
            {
                page !== "login" && (
                    <div className="form-group p-2">
                        <small><label className="text-muted">Your name</label></small>
                        <input
                            value={userName}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter name" />
                    </div>)
            }

            <div className="form-group p-2">
                <small><label className="text-muted">Email adress</label></small>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Enter email" />
            </div>

            <div className="form-group p-2">
                <small><label className="text-muted">Passowrd</label></small>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Enter password" />
            </div>

            {page != "login" && (
                <>
                    <div className="form-group p-2">
                        <small><label className="text-muted">Pick a quesiton</label></small>
                        <select className="form-control">
                            <option>What is your favourite color?</option>
                            <option>What is your best friend's name?</option>
                            <option>What city you were born?</option>
                        </select>

                        <small className="form-text text-muted">
                            You can use this to reset your password if forgotten.
                        </small>
                    </div>

                    <div className="form-group p-2">
                        <input
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="write your answer here" />
                    </div>
                </>)
            }

            <div className="form-group p-2">
                <button
                    disabled={page !== "login" ? !userName || !email || !password || !secret || loading : !email || !password || loading}
                    className="btn btn-primary col-12">
                    {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
                </button>
            </div>
        </form>
    )

}



export default AuthForm;