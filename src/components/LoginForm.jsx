export default function LoginForm({ setToken }) {

    const handleLogin = (event) => {
      event.preventDefault()
      const { email, password } = event.target
      fetch('https://first-deployed-api-ceb.web.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      })
        .then(res => res.json())
        .then(data => setToken(data.token))
        .catch(alert)
    }
  
    return (
      <section>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    )
  }