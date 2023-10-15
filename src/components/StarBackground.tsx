import "../assets/StarBackground.scss"

const StarBackground = () => {
    const circles = [];
    for (let i = 1; i <= 300; i++) {
        circles.push(
            <div className="circle-container" key={i}>
                <div className="circle star"></div>
            </div>
        );
    }

    return (
        <div className="circle-big-container">
            {circles}
        </div>
    );
};

export default StarBackground;