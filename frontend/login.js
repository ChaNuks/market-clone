const form = document.querySelector("#login-form");

const handlefSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_Token;
  window.localStorage.setItem("token", accessToken);
  alert("로그인되었습니다.");

  window.location.pathname = "/";
};

form.addEventListener("submit", handlefSubmit);
