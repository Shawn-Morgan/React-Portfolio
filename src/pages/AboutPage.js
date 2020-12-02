import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>Leadership and project delivery experience gained through roles across multiple domains from 
            web development to IT service provisioning to information management and analytics. 
            Successfully led teams in the delivery of innovative and unique solutions across banking, 
            healthcare and energy industries.</p>

            <p>Recognized for challenging the status quo and supporting the teams I work with in moving beyond 
            current thinking for what is possible. Demonstrated Growth Mindset with a focus on 
            customer-centricity and user experience.</p>

            <p>Interested in learning about new leadership and project/program delivery opportunities and 
            can be reached through this profile, phone 832-446-7474 or by email: shawnm74@gmail.com</p>
            </Content>
        </div>
    );

}

export default AboutPage;