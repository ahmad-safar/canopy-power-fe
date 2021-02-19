<template>
  <div class="container" style="margin-top:120px">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card-group">
          <div class="card p-4">
            <div class="card-body">
              <h1>Login</h1>
              <p class="text-muted">Sign In to your account</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="c-icon cil-user"></i>
                  </span>
                </div>
                <input
                  class="form-control"
                  :class="{ 'is-invalid': emailError != '' }"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                />
                <div class="invalid-feedback">{{ emailError }}</div>
              </div>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="c-icon cil-lock-locked"></i>
                  </span>
                </div>
                <input
                  class="form-control"
                  :class="{ 'is-invalid': passwordError != '' }"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
                <div class="invalid-feedback">{{ passwordError }}</div>
              </div>
              <div class="row">
                <div class="col-6">
                  <button class="btn btn-primary px-4" type="button" @click="login">Login</button>
                </div>
                <div class="col-6 text-right">
                  <button class="btn btn-link px-0" type="button">Forgot password?</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

export default {
  name: 'Login',

  setup() {
    const router = useRouter()
    const loggedIn = localStorage.getItem('user')

    if (loggedIn) {
      router.push('/')
      return
    }

    const email = ref('')
    const password = ref('')
    const emailError = ref('')
    const passwordError = ref('')

    const login = async () => {
      try {
        emailError.value = ''
        passwordError.value = ''
        const response = await api.post('/login', {
          email: email.value,
          password: password.value
        })
        localStorage.setItem('user', JSON.stringify(response.data))
        router.push('/')
      } catch (error) {
        const arr = error.response.data.errors
        arr.forEach(element => {
          if (element.param == 'email') emailError.value = element.msg
          if (element.param == 'password') passwordError.value = element.msg
        })
      }
    }
    return { email, password, emailError, passwordError, login }
  },
}
</script>
