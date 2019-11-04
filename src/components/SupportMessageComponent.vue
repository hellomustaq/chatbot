<template>
  <div class="support-container">
        <div class="support-wrapper">
            <div class="support-form support-start" v-if="showForm">
                <div class="support-body" style="postition:relative;">
                    <div v-if="this.first">
                        <h3>Send Message to Support Team!</h3>
                        <p v-if="!sentMessage">Use the form below to share your questions, ideas, comments and feedback.</p>

                        <div class="success-message" v-if="this.sentMessage">
                            <p>Thanks for your message. Our technical team received your query and working on it, We will get back to you shortly. Typically it may take 24 hours</p>
                        </div>

                        <p class="error-message" v-if="this.error">
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
                                <button type="submit" class="form-control btn  btn-success">Send</button>
                            </div>
                        </form>
                    </div>
                    <div style="position:absolute;bottom:0;width:100%;" v-else>
                        <div class="padd">
                            <h4 class="text-left text-white">Chatting with supports </h4>
                        </div>
                        <div class="mesgs">
                            <div class="msg_history">
                                <div class="incoming_msg">
                                    <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">
                                    </div>
                                    <div class="received_msg">
                                        <div class="received_withd_msg">
                                        <p>Test, which is a new approach to have</p>
                                        <span class="time_date"> 11:01 AM    |    Yesterday</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="outgoing_msg">
                                    <div class="sent_msg">
                                        <p>Apollo University, Test Data</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span>
                                    </div>
                                </div>
                                <div class="incoming_msg">
                                    <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">
                                    </div>
                                    <div class="received_msg" v-for="item in this.response" :key="item">
                                        <div class="received_withd_msg">
                                        <p>{{ item }}</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="type_msg">
                                <form action="" @submit.prevent="sendMessageSingle">
                                    <div class="input_msg_write">
                                    <input type="text" class="write_msg" placeholder="Type a message">
                                    <button class="msg_send_btn" type="submit"><img src="https://img.icons8.com/dotty/80/000000/filled-sent.png"></button>
                                    </div>
                                </form>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <a class="support-float" @click="showForm = !showForm">
            <img v-if="showForm" class="p-13" src="https://img.icons8.com/pastel-glyph/64/000000/cancel.png">
            <img v-else class="p-13" src="https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png">
            <img >

<!--            <i id="icon" v-bind:class="[(showForm === true ? 'fa fa-times-circle button-circle' : 'fa fa-envelope button-message')]"></i>-->
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
                action : 'http://127.0.0.1:8000/chatbotV4/',
                first : true,
                response : [],
                singleMessage : '',
        }
        },

        mounted(){
            // console.log('here');
        },
        methods: {
            sendMessage() {
                // this.formData.append('email', this.email);
                // this.formData.append('phone', this.phone);
                this.formData.append('messageText', this.message);
                Vue.axios.post('http://127.0.0.1:8000/chatbotV4/', this.formData, {
                    mode : 'no-cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-Requested-With': 'XMLHttpRequest',
                    }})
                    .then(response => {
                        this.response.push(response.data.answer)
                            this.first = false
                        if (status == 200) {
                            this.sentMessage = true;

                        } else {
                            this.error = true;
                        }
                    })
            },

            sendMessageSingle(){
                this.formData.append('body', this.message);
                Vue.axios.post(this.action, this.formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                }})
                .then(response => {
                        this.first = false
                        this.response.push(response.data.answer)
                        
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
        border-radius: 0 0 10px 10px;
    }

    .support-wrapper p {
        width: 100%;
        padding: 8px 6px;
        margin-bottom: 5px;
        text-align: center;
    }

    .support-form {
        width: 350px;
        height: 340px;
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

    .bottom-5{
        bottom: 5;
    }

    @media screen and (max-width: 450px) {
        .support-form {
            width: 300px;
            height: 360px;
        }
    }

    /* chat box */


img{ 
    max-width:100%;
}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ 
    margin: 20px 0 0;
}


.recent_heading {
    float: left;
     width:40%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; padding:0;
}
.headind_srch{
     padding:10px 29px 10px 20px; 
     overflow:hidden; 
     border-bottom:1px solid #c4c4c4;
}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ 
    border:1px solid #cdcdcd; 
    border-width:0 0 1px 0; 
    width:80%; 
    padding:2px 0 4px 6px; 
    background:none;
}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { 
    margin: 0 0 0 -27px;
}

.chat_ib h5{ 
    font-size:15px; 
    color:#464646; 
    margin:0 0 8px 0;
}
.chat_ib h5 span{ 
    font-size:13px; float:right;
}
.chat_ib p{ 
    font-size:14px; 
    color:#989898; 
    margin:auto
}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ 
    overflow:hidden; 
    clear:both;
}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat {
    height: 550px; overflow-y: scroll;
}

.active_chat{ 
    background:#ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { 
    width: 57%;
}
.mesgs {
  float: left;
  padding: 10px 15px 0 25px;
  width: 100%;
}

 .sent_msg p {
  background: #e52525 none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ 
    overflow:hidden; margin:26px 0 26px;
}

.received_withd_msg p{
    background: white;
}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {
    border-top: 1px solid #c4c4c4;position: relative;
}

.msg_send_btn {
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

.msg_history {
    height: 285px;
  overflow-y: auto;
}

.p-13{
    padding : 13px;
}

.padd {
    background: #e52525;
    padding: 8px;
    border-radius: 7px 7px 0px 0px;
}

    .text-white{
        color: white;
    }
</style>
