import AuthService from '../../services/auth';
import router from "@/router"

export const login = async({ commit }, user) => {
    return await AuthService.login(user).then(
        user => {
            commit('loginSuccess', user);
            router.push('/dashboard')
        },
        
        error => {
            commit('loginFailure', error);
        }
    );
}
export const logout = ({ commit }) => {

    commit('logout');
   // location.reload();
}
