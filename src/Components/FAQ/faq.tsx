import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./faq.scss"

type Panel = {
    questionId: string;
    question: string;
    answer: string;
}

function Faq() {

    const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});

    const toggleExpanded = (questionId: string) => {
        setIsExpanded(prevState => ({
            ...prevState,
            [questionId]: !prevState[questionId],
        }));
    };

    const faqItems: Panel[] = [
        {
            questionId: "question-1",
            question: "How does URL shortening work?",
            answer:
                "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
        },
        {
            questionId: "question-2",
            question: "Is it necessary to create an account to use the URL shortening service?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
        {
            questionId: "question-3",
            question: "Are the shortened links permanent? Will they expire?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
        {
            questionId: "question-4",
            question: "Are there any limitations on the number of URLs I can shorten?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
        {
            questionId: "question-5",
            question: "Can I customize the shortened URLs to reflect my brand or content?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
        {
            questionId: "question-6",
            question: "Can I track the performance of my shortened URLs?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
        {
            questionId: "question-7",
            question: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
        {
            questionId: "question-8",
            question: "What is a QR code and what can it do?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
        {
            questionId: "question-9",
            question: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
            answer:
                "We are a Nigeria Digital Agency offering a customized Website, Mobile App Development or Digital Marketing services including marketing strategy, content marketing, social media marketing and many more. To find out more about us, click here.",
        },
    ];



    return (
        <div className="faq__container">
            <h2>FAQs</h2>

            <div className="faq__body">
                {faqItems.map(faqItem => (
                    <div
                        key={faqItem.questionId}
                        onClick={() => toggleExpanded(faqItem.questionId)}
                    >
                        <div>
                            <h3 className="question" id={faqItem.questionId}>
                                {faqItem.question}
                            </h3>
                            <i className={`fa-solid ${isExpanded[faqItem.questionId] ? 'fa-minus' : 'fa-plus'
                                }`}>
                            </i>
                        </div>

                        <div className={`answer ${isExpanded[faqItem.questionId] ? 'show' : ''
                            }`} id={`answer-${faqItem.questionId}`}>
                            {isExpanded[faqItem.questionId] && <p>{faqItem.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>


            <div>
                <h2>Revolutionizing Link Optimization</h2>

                <NavLink to="/SignUp">Get Started</NavLink>

            </div>
        </div>
    );
}


export default Faq;