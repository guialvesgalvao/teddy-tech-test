import AuthCard from "@/components/authcard/auth-card";
import { LoginUserForm } from "@/components/forms/login-user-form/login-user-form";
import { setUserCookie } from "@/shared/helpers/create-user-cookie";

export default function Auth() {
  return (
    <AuthCard title={"Olá, seja bem-vindo!"}>
      <LoginUserForm onSubmit={(data) => {
        setUserCookie(data.name, 7)
        window.location.reload()
        }} />
    </AuthCard>
  );
}
