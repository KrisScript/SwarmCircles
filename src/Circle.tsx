import "./Circle.css";

let i: number = 0;
let circleText: string = "Lorem ipsum";

export const Circle = (circles: { resX: number; resY: number; }) => {
    function Color() { 
        const Colors = ["radial-gradient(circle at 100px 100px, #7CB9E8, #000)", "radial-gradient(circle at 100px 100px, #00308F, #000)", "radial-gradient(circle at 100px 100px, #007FFF, #000)", "radial-gradient(circle at 100px 100px, #6495ED, #000)", "radial-gradient(circle at 100px 100px, #6F00FF, #000)"];
        if (i > Colors.length - 1) {
            i = 0;
        } else
        return Colors[i++];
    }
    return (

    <div
      className="Circle"
      style={{
        background: `${Color()}`,
        left: `${circles.resX}px`,
        top: `${circles.resY}px`,
      }}>
      {circleText}
    </div>
    
  );
};
