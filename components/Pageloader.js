import $ from "jquery"

const Pageloader = () => {

    // $(window).on("load", function() {
    //     $(".overlay").fadeOut(1500);
    //   });

    return (
<div className="overlay">
  <div className="wrapperpl">
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
  </div>
</div>
    )
}

export {Pageloader as default}