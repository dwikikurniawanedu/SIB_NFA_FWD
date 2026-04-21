const LoginForm = () => {
  const style = {
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxWidth: "300px",
      margin: "auto",
    },
    input:{
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    button:{
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
    },
  };
  return (
    <form style={style.form}>
      <input style={style.input} type="text" placeholder="Username" />
      <input style={style.input} type="text" placeholder="Email" />
      <input style={style.input} type="password" placeholder="Password" />
      <button style={style.button}>Login</button>
    </form>
  );
};

export default LoginForm;
