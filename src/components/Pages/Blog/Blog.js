import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Treina-Blog</title>
            </Helmet>
            <div className='question-container p-5 mt-5'>

                <div className="question-one">
                    <h1 className="question p-5">One. Difference between authorization and authentication?</h1>
                    <p className='ps-5'><b><u>Ans: </u></b>Authentication vs. Authorization</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h5>Authentication</h5>
                                <p>1. Authentication verifies who the user is.</p>
                                <p>2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                                <p>3. Authentication is the first step of a good identity and access management process.</p>
                                <p>4. Authentication is visible to and partially changeable by the user.</p>
                                <p>5. Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>
                            </div>

                            <div className="col-lg-6">
                                <h5>Authorization</h5>
                                <p>1. Authorization determines what resources a user can access.</p>
                                <p>2. Authorization works through settings that are implemented and maintained by the organization.</p>
                                <p>3. Authorization always takes place after authentication.</p>
                                <p>4. Authorization isn’t visible to or changeable by the user.</p>
                                <p>5. Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="question-two mt-5">
                    <h1 className="question p-5">Two. Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <div className="container">
                        <div className="row">
                            <p className='ps-5'><b><u>Ans: </u></b>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                                Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>

                        </div>
                    </div>

                </div>


                <div className="question-three mt-5">
                    <h1 className="question p-5">Three. What other services does firebase provide other than authentication?</h1>
                    <div className="container">
                        <div className="row">
                            <p className='ps-5'><b><u>Ans: </u></b></p>
                            <p><b>1. Vendor Lock-in</b></p>
                            <p>Firebase is a Google-backed closed source platform with many excellent features that allow developers to create an MVP quickly. However, vendor lock-in one of its biggest concerns among developers and the main shortcoming of Firebase.

                                You won’t want to invest time and money, developing an app, and have no control over the source code. It’s not a smart decision. An astute venture capitalist or angel investor would be reluctant to fund your startup if you cannot access your app’s source code. In essence, using a closed source platform may undermine the chances of scaling your app.</p>
                            <p><b>2. Pricing</b></p>
                            <p>If you are using Firebase, you should remember that server costs can increase significantly as your app begins to scale. Although Firebase offers a free plan, the free tier’s limitations make it suitable for small apps only.</p>
                            <p><b>3. Hosting Options</b></p>
                            <p>Firebase offers only one type of hosting setup at Google Cloud platform. So, you are compelled to use Firebase cloud infrastructure and share resources with other applications.</p>
                            <p><b>4. Data Storage</b></p>
                            <p>1.5: Data Storage. Unless otherwise provided for by the Paid Services, Customer Data will be stored in the United States (“Hosting Data Location”), except that the Hosting Data Location may not apply to Customer Data copied by Customer or a Customer’s End User to another location or used with other Google products and services.</p>
                            <p><b>5.  NoSQL Database & Limited Queries</b></p>
                            <p>Firebase works with a closed-source NoSQL database for Firestore and the Real-Time database. It imposes users the restrictions of a NoSQL database, including very limited querying and indexing.</p>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Blog;