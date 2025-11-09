<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Google_Gemini_logo.svg/344px-Google_Gemini_logo.svg.png" alt="Gemini Logo" width="200"/>
  <h1>Проект Gemini UI</h1>
  <p>Привет! Я написал код, который позволяет пользоваться Gemini в браузере с пользовательским интерфейсом.</p>
  <p>Этот проект предоставляет удобный способ взаимодействия с моделью Gemini через веб-интерфейс, делая её доступной и интуитивно понятной.</p>
</div>

<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #1a1a1a; /* Темно-серый фон */
    color: #e0e0e0; /* Светлый текст */
    line-height: 1.6;
    margin: 0;
    padding: 20px;
  }
  div {
    background-color: #2a2a2a; /* Чуть светлее серого для контейнера */
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    max-width: 800px;
    margin: 40px auto;
    border: 1px solid #4a4a4a;
    position: relative;
    overflow: hidden;
  }
  div::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, rgba(60, 0, 120, 0.3) 0%, rgba(0, 60, 120, 0.3) 50%, rgba(120, 0, 60, 0.3) 100%);
    transform: rotate(45deg);
    opacity: 0.3;
    animation: gradient-animation 15s ease infinite;
    z-index: 0;
  }
  @keyframes gradient-animation {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(360deg) scale(1.1);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }
  h1 {
    color: #00bfff; /* Голубой */
    font-size: 2.8em;
    margin-bottom: 15px;
    text-shadow: 0 0 10px rgba(0, 191, 255, 0.7);
    position: relative;
    z-index: 1;
  }
  p {
    color: #c0c0c0; /* Светло-серый */
    font-size: 1.1em;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
  }
  img {
    border-radius: 10px;
    margin-bottom: 20px;
    border: 2px solid #8a2be2; /* Фиолетовая рамка */
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.6);
    transition: transform 0.3s ease-in-out;
    position: relative;
    z-index: 1;
  }
  img:hover {
    transform: scale(1.05);
  }
</style>

