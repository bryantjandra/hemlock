import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return loginApi({ email, password });
    },
    onSuccess: (user) => {
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(`ERROR`, err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
