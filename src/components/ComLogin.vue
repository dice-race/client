<template>

    <div class="container">
        <div class="row">

            <div  class="col-sm-9 col-md-7 col-lg-10 mx-auto">
                <div  class="card card-signin my-5">
                    <div class="card-body">
                        <img src="https://i.imgur.com/YLzc54j.png" alt=""><a href="https://fontmeme.com/arms-video-game-font/"><img src="https://fontmeme.com/permalink/180824/6f74ab54e6e759320ec00f5b79414748.png" alt="arms-video-game-font" border="0"></a><img src="https://i.imgur.com/VPMtpGQ.png" alt="">
                        <br><b></b>
                       <a href="https://fontmeme.com/haikyu-anime-font/"><img src="https://fontmeme.com/permalink/180824/9998ee290d19bbedf3144dcc235bff35.png" alt="haikyu-anime-font" border="0"></a>
                        <!-- <h5 class="card-title text-center">JO UN vs THAMP LADDERS</h5> -->
                        <br><br>
                        <form class="form-signin">
<<<<<<< HEAD
                                <input type="text" v-model="inputName" class="form-control" placeholder="input name" required autofocus>
                                <br><br>
=======
                            <div >
                                <input type="text" v-model="inputName" class="form-control" placeholder="username" required autofocus>
                                <label for="username"></label>
                            </div>
>>>>>>> style login
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click.prevent="createUser">Sign in</button>
                            <hr class="my-4">

                        </form>
                    </div>
                </div>
            </div>


        </div>
    </div>



</template>

<script>
    import {
        mapActions,
        mapState
    } from 'vuex'
    export default {
        methods: {
            ...mapActions([
                 "createUser"
            ]) 
        },
        computed: {
            inputName: {
                get() {
                    return this.$store.state.username
                },
                set(value) {
                    this.$store.commit('setName',value)
                }
            }
        }


    }
</script>

<style <style scoped>

    :root {
        --input-padding-x: 1.5rem;
        --input-padding-y: .75rem;
    }

    body {
        background: mediumturquoise;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, mediumturquoise, rgb(126, 245, 241), #9CECFB);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, mediumturquoise, #65C7F7, #9CECFB);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .card-signin {
        border: 0;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
        background-color: yellow;
    }

    .card-signin .card-title {
        margin-bottom: 2rem;
        font-weight: 300;
        font-size: 1.5rem;
    }


    .card-signin .card-body {
        padding: 2rem;
    }

    .form-signin {
        width: 100%;
    }

    .form-signin .btn {
        font-size: 80%;
        border-radius: 5rem;
        letter-spacing: .1rem;
        font-weight: bold;
        padding: 1rem;
        transition: all 0.2s;
    }

    .form-label-group {
        position: relative;
        margin-bottom: 1rem;
    }

    .form-label-group input {
        border-radius: 2rem;
    }

    .form-label-group>input,
    .form-label-group>label {
        padding: var(--input-padding-y) var(--input-padding-x);
    }

    .form-label-group>label {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        margin-bottom: 0;
        line-height: 1.5;
        color: #495057;
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: all .1s ease-in-out;
    }

    .form-label-group input::-webkit-input-placeholder {
        color: transparent;
    }

    .form-label-group input:-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-moz-placeholder {
        color: transparent;
    }

    .form-label-group input::placeholder {
        color: transparent;
    }

    .form-label-group input:not(:placeholder-shown) {
        padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
        padding-bottom: calc(var(--input-padding-y) / 3);
    }

    .form-label-group input:not(:placeholder-shown)~label {
        padding-top: calc(var(--input-padding-y) / 3);
        padding-bottom: calc(var(--input-padding-y) / 3);
        font-size: 12px;
        color: #777;
    }

    .btn-google {
        color: white;
        background-color: #ea4335;
    }

    .btn-facebook {
        color: white;
        background-color: #3b5998;
    }
</style>