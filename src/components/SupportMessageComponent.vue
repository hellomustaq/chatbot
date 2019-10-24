<template>
  <div class="support-container">
        <div class="support-wrapper">
            <div class="support-form support-start" v-if="showForm">
                <div class="support-body">
                    <h3>Send Message to Support Team!</h3>
                    <p v-if="!sentMessage">Use the form below to share your questions, ideas, comments and feedback.</p>

                    <div class="success-message" v-if="sentMessage">
                        <p>Thanks for your message. Our technical team received your query and working on it, We will get back to you shortly. Typically it may take 24 hours</p>
                    </div>

                    <p class="error-message" v-if="error">
                        Something went wrong! Please try again.
                    </p>

                    <form action="" @submit.prevent="sendMessage" v-if="!sentMessage">
                        <div class="form-group">
                            <input type="email" class="form-control" required v-model="email" name="email" placeholder="Enter your email!">
                        </div>

                        <div class="form-group">
                            <input type="tel" class="form-control" required v-model="phone" name="phone" placeholder="Enter your phone number!">
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" required rows="3" v-model="message" name="message" placeholder="Write message"></textarea>
                        </div>

                        <div class="form-group">
                            <input type="file" class="choose-file form-control" ref="file" multiple="multiple" @change="fileHandle">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control btn  btn-default">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <a class="support-float" @click="showForm = !showForm">
            <i id="icon" v-bind:class="[(showForm === true ? 'fa fa-times-circle button-circle' : 'fa fa-envelope button-message')]"></i>
        </a>
    </div>
</template>

<script>
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
export default {
  name: "SupportMessageComponent",
        data() {
            return {
                showForm: false,
                sentMessage: false,
                message: '',
                email: '',
                phone: '',
                error: false,
                files : '',
                formData : new FormData(),
                action : 'http://localhost:8000/chat'
        }
        },

        mounted(){
            // console.log('here');
        },
        methods: {
            fileHandle() {
                let init = 0;
                for( let i = 0; i < this.$refs.file.files.length; i++ ){
                    let file = this.$refs.file.files[init];
                    init++;
                    this.formData.append('documents[' + i + ']', file);
                }
            },
            sendMessage() {
                this.formData.append('email', this.email);
                this.formData.append('phone', this.phone);
                this.formData.append('message', this.message);


                axios.post(this.action, this.formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }})
                    .then(response => response.data)
                    .then(({status}) => {
                        if (status === 'success') {
                            this.sentMessage = true;
                        } else {
                            this.error = true;
                        }
                    })
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .support-container {
        z-index: 999999;
        position: absolute;
    }

    .support-wrapper {
        background-color: #eaeaea;
        position: fixed;
        bottom: 90px;
        right: 35px;
        color: #555555;
        border-radius: 10px;
    }

    .support-wrapper p {
        width: 100%;
        padding: 8px 6px;
        margin-bottom: 5px;
        text-align: center;
    }

    .support-form {
        width: 350px;
        height: 384px;
        text-align: center;
        margin-bottom: 5px;
    }

    .support-form form {
        padding: 0 5px;
    }

    .support-start h3 {
        font-size: 18px;
        font-weight: 400;
        float: left;
        background: #e42525;
        padding: 14px;
        margin: 0;
        width: 100%;
        color: #fff;
        border-radius: .66667rem .66667rem 0 0;
        border-bottom: .09167rem solid #e42525;
    }

    .support-start p {
        font-size: 13px;
        float: left;
        text-align: left;
    }

    .support-float {
        width: 60px;
        height: 60px;
        background-color: #E42525;
        border-radius: 60px;
        text-align: center;
        position: fixed;
        bottom: 25px;
        right: 35px;
        cursor: pointer;
        color: #fff;
    }

    .support-float a {
        background-color: #E42525;
        color: #ffffff;
    }

    .support-float a:hover {
        background-color: #E42525;
        color: #ffffff;
    }

    .choose-file {
        padding: 4px !important;
    }

    .button-red {
        background: #E42525;
        color: #fff;
    }

    .button-message {
        margin-top: 14px;
        font-size: 28px;
    }

    .button-circle {
        margin-top: 16px;
        font-size: 28px;
        margin-left: 3px;
    }

    @media screen and (max-width: 450px) {
        .support-form {
            width: 300px;
            height: 360px;
        }
    }
</style>
