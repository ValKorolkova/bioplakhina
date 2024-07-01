function ButtonOne (){
    const telegramLink = () => {
        window.location.href = "https://t.me/daryberry";
    }
    return (
        <button className="buttonOne lora-regular" onClick={telegramLink}>Записаться</button>
    )
}
export default ButtonOne;