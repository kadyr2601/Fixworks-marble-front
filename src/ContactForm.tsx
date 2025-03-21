import { useState } from "react";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Простой RegExp для базовой валидации e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Обработчик отправки
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Сбросим любое старое сообщение
        setError("");
        setSuccessMessage("");

        // Проверяем формат e-mail перед отправкой
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            // Отправляем запрос на сервер
            const response = await fetch("https://fixworks-marble.com/api/v1/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error("Server error");
            }

            // Если всё ок, обнуляем email и показываем успех
            setEmail("");
            setSuccessMessage("Email sent successfully!");
        } catch (err) {
            console.error(err);
            setError("Something went wrong while sending the email.");
        }
    };

    return (
        <div
            className="container py-vh-3 border-top"
            data-aos="fade"
            data-aos-delay="200"
            id="contact"
        >
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8 text-center">
                    <h3 className="fs-2 fw-light">
                        You have anything to restore or renovate?
                        <br />
                        <span className="fw-bold">Just send us a message!</span>
                    </h3>
                </div>
                <div className="col-12 col-lg-8 text-center">
                    <div className="row">
                        <div className="grouped-inputs border bg-light p-2">
                            <div className="row">
                                <form
                                    className="col d-flex align-items-center"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="form-floating flex-grow-1">
                                        <input
                                            type="email"
                                            className="form-control p-3"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-dark py-3 px-5 ms-2"
                                    >
                                        Get a quote
                                    </button>
                                </form>
                            </div>
                            {/* Блоки вывода сообщения об ошибке или успехе */}
                            {error && (
                                <div className="text-danger mt-2" data-aos="fade">
                                    {error}
                                </div>
                            )}
                            {successMessage && (
                                <div className="text-success mt-2" data-aos="fade">
                                    {successMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
