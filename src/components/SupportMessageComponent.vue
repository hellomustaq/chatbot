<template>
  <div class="taleantAI-support-container">
        <div class="taleantAI-support-wrapper">
            <div class="taleantAI-support-form taleantAI-support-start" v-if="showForm">
                <div class="taleantAI-support-body" style="postition:relative;">
                    <div v-if="this.first">
                        <h3>Send Message to Support Team!</h3>
                        <p v-if="!sentMessage">Use the form below to share your questions, ideas, comments and feedback.</p>

                        <div class="taleantAI-success-message" v-if="this.sentMessage">
                            <p>Thanks for your message. Our technical team received your query and working on it, We will get back to you shortly. Typically it may take 24 hours</p>
                        </div>

                        <p class="taleantAI-error-message" v-if="this.error">
                            Something went wrong! Please try again.
                        </p>
                        <form action="" @submit.prevent="sendMessage" v-if="!sentMessage">
                            <div class="taleantAI-form-group">
                                <input type="email" class="taleantAI-form-control" required v-model="email" name="email" placeholder="Enter your email!">
                            </div>

                            <div class="taleantAI-form-group">
                                <input type="tel" class="taleantAI-form-control" required v-model="phone" name="phone" placeholder="Enter your phone number!">
                            </div>

                            <div class="taleantAI-form-group">
                                <textarea class="taleantAI-form-control" required rows="3" v-model="message" name="message" placeholder="Write message"></textarea>
                            </div>
                            <div class="taleantAI-form-group">
                                <button type="submit" class="taleantAI-form-control btn  btn-default">Send</button>
                            </div>
                        </form>
                    </div>
                    <div style="position:absolute;bottom:0;width:100%;" v-else>
                        <div class="taleantAI-padd">
                            <h4 class="taleantAI-text-left text-white">Chatting with support team! </h4>
                        </div>
                        <div class="taleantAI-mesgs">
                            <div class="taleantAI-msg_history" id="taleantAI-msg_history" v-chat-scroll>
                                <div v-for="message in this.messageBot" :key="message">
                                    <div v-if="message.type === 'send'" class="taleantAI-outgoing_msg">
                                        <div class="taleantAI-sent_msg">
                                            <p>{{ message.text }}</p>
                                            <span class="taleantAI-text-right taleantAI-time_date"> 11:01 AM    |    Today</span>
                                        </div>
                                    </div>

                                    <div v-else class="taleantAI-incoming_msg">
                                        <div class="taleantAI-incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="avater">
                                        </div>
                                        <div class="taleantAI-received_msg">
                                            <div class="taleantAI-received_withd_msg">
                                            <p><span v-html="message.text.response"></span></p>
                                            <span class="taleantAI-text-left taleantAI-time_date"> 11:01 AM    |    Yesterday</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="taleantAI-type_msg">
                                <form action="" @submit.prevent="sendMessageSingle">
                                    <div class="taleantAI-input_msg_write">
                                    <input v-model="message" type="text" class="taleantAI-write_msg" placeholder="Type a message" required>
                                    <button class="taleantAI-msg_send_btn p-2" type="submit"><img src="https://img.icons8.com/dotty/80/000000/filled-sent.png"></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a class="taleantAI-support-float" @click="showForm = !showForm">
            <img v-if="showForm" class="taleantAI-p-13" alt="Cancel" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDEwLjMyYy00MS43NTYxNiwwIC03NS42OCwzMy45MjM4NCAtNzUuNjgsNzUuNjhjMCw0MS43NTYxNiAzMy45MjM4NCw3NS42OCA3NS42OCw3NS42OGM0MS43NTYxNiwwIDc1LjY4LC0zMy45MjM4NCA3NS42OCwtNzUuNjhjMCwtNDEuNzU2MTYgLTMzLjkyMzg0LC03NS42OCAtNzUuNjgsLTc1LjY4ek04NiwxNy4yYzM4LjAzNzk0LDAgNjguOCwzMC43NjIwNiA2OC44LDY4LjhjMCwzOC4wMzc5NCAtMzAuNzYyMDYsNjguOCAtNjguOCw2OC44Yy0zOC4wMzc5NCwwIC02OC44LC0zMC43NjIwNiAtNjguOCwtNjguOGMwLC0zOC4wMzc5NCAzMC43NjIwNiwtNjguOCA2OC44LC02OC44ek01OC40NDY0LDU1LjAwNjRjLTEuMzk5ODIsMC4wMDAzNyAtMi42NTk4NCwwLjg0ODg0IC0zLjE4NjU4LDIuMTQ1NzdjLTAuNTI2NzQsMS4yOTY5MyAtMC4yMTUxNiwyLjc4MzcgMC43ODc5OSwzLjc2MDAxbDI1LjA4NzgxLDI1LjA4NzgxbC0yNS4wODc4MSwyNS4wODc4MWMtMC44OTg2NywwLjg2MjgxIC0xLjI2MDY4LDIuMTQ0MDQgLTAuOTQ2NDEsMy4zNDk1NmMwLjMxNDI3LDEuMjA1NTIgMS4yNTU3LDIuMTQ2OTYgMi40NjEyMiwyLjQ2MTIyYzEuMjA1NTIsMC4zMTQyNyAyLjQ4Njc1LC0wLjA0Nzc0IDMuMzQ5NTYsLTAuOTQ2NDFsMjUuMDg3ODEsLTI1LjA4NzgxbDI1LjA4NzgxLDI1LjA4NzgxYzAuODYyODEsMC44OTg2NyAyLjE0NDA0LDEuMjYwNjggMy4zNDk1NiwwLjk0NjQxYzEuMjA1NTIsLTAuMzE0MjcgMi4xNDY5NiwtMS4yNTU3IDIuNDYxMjIsLTIuNDYxMjJjMC4zMTQyNywtMS4yMDU1MiAtMC4wNDc3NCwtMi40ODY3NSAtMC45NDY0MSwtMy4zNDk1NmwtMjUuMDg3ODEsLTI1LjA4NzgxbDI1LjA4NzgxLC0yNS4wODc4MWMxLjAxNzQyLC0wLjk4ODk3IDEuMzIzMzMsLTIuNTAxMTEgMC43NzAzNCwtMy44MDc3OGMtMC41NTI5OSwtMS4zMDY2NyAtMS44NTE0NSwtMi4xMzk4MyAtMy4yNjk3MSwtMi4wOThjLTAuODkzNzEsMC4wMjY2MyAtMS43NDE5NCwwLjQwMDE0IC0yLjM2NSwxLjA0MTQxbC0yNS4wODc4MSwyNS4wODc4MWwtMjUuMDg3ODEsLTI1LjA4NzgxYy0wLjY0NzY1LC0wLjY2NTc1IC0xLjUzNjk4LC0xLjA0MTM1IC0yLjQ2NTc4LC0xLjA0MTQxeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+">
            <img class="taleantAI-p-13" v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEJklEQVRoge2aXYhWRRjH/7P77mq4rmZ1U5Rsu7aFfUohRmwSJEkXEV1keR1YCcFS9EVEQXfRB10F3dVFUpGglmUFQeZau8mqrYUblm5mYaD5bh+K76+LeU7vaX0/5pw976zC/uFlOHOeeZ7fnDMzO/OclWY1q1k1kivKEXCppBWSbpTUK+lySd2SusykLOm4pAOSxiUNS9rhnJsoiiG3gD7geWAP9XXMfvW0G3gO6JuJDgwAW4HTBlMBhoGXgTXADcDCGu0WAsuA+4BXgG9SHToNfAjcEqMDfcAHqeD7gUeBy6bhczHwGDCe8rsZ6C2SPQnmgEHgTwv0LXA3UOQcawPuAcYsxiTwSGExgC7g3ZTzQaC9EOe145XsDSUP7R2gq3nLxk4XATtTb6G/IN6Q2FcB+yz2EHB+XkfdwC5z9DEwv2DWEIb5wCfGMJKZAWi3FSSZeHNaxBrCMjfFsiXTsAaesYbDwLwWcobydKVGx5Ohja4HTgLHgZ4WMwYL6AX+AP4BrglpkIzJByLwZRLwYDJnmxmuNMPRVi6xeWVzd68xDjQyfM+M7o3Il0nA/ca4oZ7BApsbvwAdkfmCBXQCv9pc+W85bkvZrJLUIWmTc+5UdMJAOedOStosqVPS7Ul9uiMrrNwWkSuvksl+c1KR7kiypI1Gw8mvhPHMZTi1r2k6P4A7gQngELA6ll3KvtNYx2rdPAyUmzkx20NUdTCW3ZQ2k8DPyXV6aFWmXJ+bonrunhtgu9qe4kHgjlh2KfuGQ2ub3VzSzNFMC39WAfgoqUsPpRErb4qLlUvXWbknqUh3ZKeVt0bDya9VVm4/4w4wDzgBHAU643KFC5gD/Ab8Tb0TI/CWjb01kfmCBaw1xrcbGS3DJ9vGODu38SV8EgSaJfKA983w4Uh8wQLWG9vWEOMemyuTwBUR+IIELAHK+O370tBG66zne6mRw40tfGpq1Jgez9r4DWv4OTOYSQHOw+fVADYB2bZRQAfVfNIQcGGLWBsxdAOfGcPX5E2d2pqdnOPHgeUFszaKvRT4zmLvmPYQx2cuXrRl+RTwdEGs9eKVgCeAv6wTG3K/iToB7jLHRwpz+n//bfiPRN9bnDKwvhWBLrYAXxTst8fewAGq2kjGLGcpg+1KK0dq3QSeknSB/Hl6t6SfJB1zzpGyWST/kbRf0nJJA6ruZCvy2ZEXnHNDGbiyCZ8JB7htSn0JeJX6OoHPI9fTLuDZrG9gqoI+awGXSPpR0oSkXudcxer7Jb0uv/U/ImlQ0mJJ10rqkbTAfu2SJiX9Lv+mfpD0laQh59zh6XQgk4DX7Omts+uLgJfwmUnwm8xoX7NyCbjagMv474cb8fudRG9S5PLYCuH/hnxZY1xXgE+Bs+Y02WzVekjSlfJz46j8v15sl7TFObe/xWyzOqf1L9LUZdNMY79MAAAAAElFTkSuQmCC">
        </a>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css';
Vue.use(VueAxios, axios)
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
                formData : new FormData(),
                action : 'http://taleantai.com/teleausbot/',
                first : true,
                messageBot : [],
                singleMessage : '',
            }
        },

        mounted(){
            // console.log('here');
        },
        methods: {
            sendMessage() {

                Vue.set(this.messageBot,'send-'+this.random(10) , this.message)
                this.formData.append('email', this.email);
                this.formData.append('phone', this.phone);
                let obj = {"type": "send", "text": this.message};
                this.messageBot.push(obj);
                console.log(this.messageBot)

                this.formData.append('messageText', this.message);
                Vue.axios.post('http://taleantai.com/teleausbot/', this.formData, {
                    mode : 'no-cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization' : 'Token 8bc074db1ec604693458ba15b0dd50af41b962c3'
                    }})
                    .then(response => {
                        this.first = false
                        this.sentMessage = true;

                        let obj = {"type": "reply", "text": response.data};
                        this.messageBot.push(obj);
                        this.message = '';

                    })
            },

            sendMessageSingle(){
                let obj = {"type": "send", "text": this.message};
                this.messageBot.push(obj);
                Vue.set(this.messageBot,'send-'+this.random(10) , this.message);
                this.formData.set('messageText', this.message);
                console.log(this.message);
                Vue.axios.post(this.action, this.formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization' : 'Token 8bc074db1ec604693458ba15b0dd50af41b962c3'
                }})
                .then(response => {
                    console.log(response.data);
                    this.first = false;
                    let obj = {"type": "reply", "text": response.data};
                    this.messageBot.push(obj);
                    this.message = '';

                    if (status === 'success') {
                        this.sentMessage = true;
                    } else {
                        this.error = true;
                    }
                })
            },

            random(length){
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < length; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
        }
}
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .taleantAI-support-container {
        z-index: 999999;
        position: absolute;
    }

    .taleantAI-support-wrapper {
        background-color: #eaeaea;
        position: fixed;
        bottom: 90px;
        right: 35px;
        color: #555555;
        border-radius: 0 0 10px 10px;
    }

    .taleantAI-support-wrapper p {
        width: 100%;
        padding: 8px 6px;
        margin-bottom: 5px;
        text-align: center;
    }

    .taleantAI-support-form {
        width: 350px;
        height: 340px;
        text-align: center;
        margin-bottom: 5px;
    }

    .taleantAI-support-form form {
        padding: 0 5px;
    }

    .taleantAI-support-start h3 {
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

    .taleantAI-support-start p {
        font-size: 13px;
        float: left;
        text-align: left;
    }

    .taleantAI-support-float {
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

    .taleantAI-support-float a {
        background-color: #E42525;
        color: #ffffff;
    }

    .taleantAI-support-float a:hover {
        background-color: #E42525;
        color: #ffffff;
    }

    @media screen and (max-width: 450px) {
        .taleantAI-support-form {
            width: 300px;
            height: 360px;
        }
    }

    /* chat box */


    .taleantAI-msg_send_btn img, .taleantAI-support-float img, .taleantAI-p-13 img, .taleantAI-incoming_msg_img img{
        max-width:100%;
    }

.taleantAI-incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.taleantAI-received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .taleantAI-received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.taleantAI-time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.taleantAI-received_withd_msg {
    width: 57%;
}
.taleantAI-mesgs {
  float: left;
  padding: 10px 15px 0 25px;
  width: 100%;
}

 .taleantAI-sent_msg p {
  background: #e52525 none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.taleantAI-outgoing_msg{
    overflow:hidden; margin:26px 0 26px;
}

.taleantAI-received_withd_msg p{
    margin-top: 0px;
    background: white;
}
.taleantAI-sent_msg {
  float: right;
  width: 46%;
}
.taleantAI-input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.taleantAI-type_msg {
    border-top: 1px solid #c4c4c4;position: relative;
}

.taleantAI-msg_send_btn {
  background: #48d874 none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}

.messaging { 
    padding: 0 0 50px 0;
}

.taleantAI-msg_history {
    height: 285px;
  overflow-y: auto;
}

.taleantAI-p-13{
    padding : 13px;
}

.taleantAI-padd {
    background: #e52525;
    padding: 8px;
    border-radius: 7px 7px 0px 0px;
}

.text-white{
    color: white;
}

.taleantAI-text-left{
    text-align: left;
}

.taleantAI-text-right{
    text-align: right;
}





/*bootstrap copy*/
    .taleantAI-form-group {
        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 10px;
        padding: 6px 5px;
    }

    .taleantAI-form-control {
        display: block;
        width: 100%;
        height: calc(1.5em + 1.5rem + 2px);
        padding: 0.375rem 0.75rem;
        /*font-size: 1rem;*/
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 16px;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        font-size: 16px;
    }
    :-ms-input-placeholder { /* IE 10+ */
        font-size: 16px;
    }
    :-moz-placeholder { /* Firefox 18- */
        font-size: 16px;
    }
</style>
