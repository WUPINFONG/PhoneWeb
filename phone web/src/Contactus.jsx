import { useState } from "react";

function Contactus() {
    const [inputName, setInputName] = useState('');
    const [inputTel, setInputTel] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = {
            name: inputName,
            tel: inputTel,
            email: inputEmail,
            title: inputTitle,
            message: inputMessage,
        };

        try {
            const response = await fetch("http://localhost:3000/Contactus", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("✅ 表單提交成功！"); // 🔥 顯示成功視窗
                setInputName('');
                setInputTel('');
                setInputEmail('');
                setInputTitle('');
                setInputMessage('');
            } else {
                alert("❌ 提交失敗，請稍後再試！");
            }
        } catch (error) {
            console.error("提交錯誤:", error);
            alert("⚠️ 伺服器錯誤，請稍後再試！");
        }

        setIsSubmitting(false);
    };

    return (
        <>
            <h2>歡迎有任何問題於下方填寫表單</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">姓名:</label>
                    <input type="text" id="name" value={inputName} onChange={(e) => setInputName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="tel">電話:</label>
                    <input type="text" id="tel" maxLength="10" value={inputTel} onChange={(e) => setInputTel(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="title">標題:</label>
                    <input type="text" id="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="message">內容:</label>
                    <textarea id="message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "送出中..." : "送出"}
                </button>
            </form>
        </>
    );
}

export default Contactus;