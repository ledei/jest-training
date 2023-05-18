import authService from "../../service/authService";
import memoryService from "../../service/memoryService";

export const LoginSubmitHandler = async (
  e,
  userDetails,
  setInfoMessage,
  navigate
) => {
  e.preventDefault();

  const res = await authService.login(userDetails);

  if (res.status >= 400) {
    let text = await res.text();
    setInfoMessage(text);
  } else {
    const authorizationToken = await res.text();
    memoryService.saveLocalValue("JWT_TOKEN", authorizationToken);
    setInfoMessage("login succesfull, you will be redirected");
    setTimeout(() => navigate(`/profile/${userDetails.username}`), 1000);
  }
};
