import { useMutation, useQueryClient } from '@tanstack/react-query';
import {login} from "../api";
import type {CurrentUser, UserCredentials} from "../types/userTypes.ts";
import type {AxiosResponse} from "axios";

export const useLogin =  () => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse<CurrentUser>, Error, UserCredentials >({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey :['currentUser']});
        },
    });
}