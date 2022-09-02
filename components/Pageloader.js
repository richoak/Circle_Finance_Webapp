import $ from "jquery"

const Pageloader = () => {

    // $(window).on("load", function() {
    //     $(".overlay").fadeOut(1500);
    //   });

    return (
<div class="overlay">
  <div class="wrapperpl">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</div>
    )
}

export {Pageloader as default}