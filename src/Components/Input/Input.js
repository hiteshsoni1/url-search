const Input = ({ side, handleUrls }) => {
    const onKeyPress = (e) => {
        e.key == 'Enter' && setUrl(e);
    }
    const setUrl = (e) => {
        let index = "left" == side ? 0 : 1
        handleUrls(e.target.value, index)
    }
    return <div className={`input-with-search  ${side}`}>
        <input className="url-input"
            defaultValue='http://' type="text"
            onBlur={setUrl}
            onKeyPress={onKeyPress}
        />
        <button className="search-button">
            <img src="https://image.flaticon.com/icons/svg/483/483356.svg" height='20px' />
        </button>
    </div>
}

export default Input