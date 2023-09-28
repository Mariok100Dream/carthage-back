[{
    id: "",
    status: "New Order",
    section_name:"section name",
    time: "8 hrs",
    days: "5 days left",
    section_image:"image base 64",
    section_data:`
      html here   
    `,
    section_css:`css here`,
    js_data:``,
    css_responsive:`
    @media (min-width:320px)  {
        /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
    
        .bodyTeatType1{
         display: {phoneContainerDisplay};
       }
       }
     @media (min-width:480px)  { 
       /* smartphones, Android phones, landscape iPhone */ 
       .bodyTeatType1{
         display: {phoneContainerDisplay};
       }
     }
     @media (min-width:600px)  { 
       /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
       .bodyTeatType1{
         display: {tabletContainerDisplay};
       } 
     }
     @media (min-width:801px)  { 
       /* tablet, landscape iPad, lo-res laptops ands desktops */ 
       .bodyTeatType1{
         display: {phoneContainerDisplay};
       }
     }
     @media (min-width:1025px) { 
       /* big landscape tablets, laptops, and desktops */
       .bodyTeatType1{
         display: {descktopContainerDisplay};
       }
      }
     @media (min-width:1281px) { 
       /* hi-res laptops and desktops */
       .bodyTeatType1{
         display: {descktopContainerDisplay};
       }
     }
    `,
    title_text:"",
    title_text_lang:"en",
    description_text:"",
    description_lang:"en",
    data_team:"",
    normale_call_section:"",
    html_element_parent_for_slider_hide : `
    $slider
    class="row"
    style="padding-top: 45px;"

    `,
    html_element_parent_for_slider_show:`
    $slider
    style="padding-top: 45px;"
    id="owl-carousel" class="row owl-carousel owl-theme"
    `,
    ch_slider_code_js_show : `
    <script>
      (function ($) {
      $("#owl-carousel").owlCarousel({
  animateOut: "animate__animated animate__slideOutDown",
  animateIn: "animate__animated animate__slideInDown",
  items: $item1200,
  loop: true,
  autoplay: $autoplay,
  dots: $showDots,
  nav: $showArrows,
  rtl:false,
  navText: [
    "<i  class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>",
  ],
  autoHeight: true,
  autoplaySpeed: 800,
  mouseDrag: $mouseDrag,
  autoplayHoverPause: true,
  responsive: {
    0: { items: $item576 },
    576: { items: $item576 },
    768: { items: $item768 },
    1200: { items: $item1200 },
  },
});

})(jQuery);


</script>

    `,
    angular_object_to_export:`
      animateOut: "animate__animated animate__slideOutDown",
      animateIn: "animate__animated animate__slideInDown",
      items: $item1200,
      loop: true,
      autoplay: $autoplay,
      dots: $showDots,
      nav: $showArrows,
      navText: [
        "<i  class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>",
      ],
      autoHeight: true,
      autoplaySpeed: 800,
      mouseDrag: $mouseDrag,
      autoplayHoverPause: true,
      responsive: {
        0: { items: $item576 },
        576: { items: $item576 },
        768: { items: $item768 },
        1200: { items: $item1200 },
      },
      `,
    ch_slider_code_js_hide:``,
    team_html:`
    <!-- begin section call -->
    <div   class="$section_caller">
            <div class="memberTeatType1-card">
              <div class="memberTeatType1-img">
                <a 
                class="aTeatType1"
                >
                <div 
                style="background-size: {widthBackground} {heightBackground} !important;background-repeat: no-repeat !important;background: {background_img};width: 100%;height: 100%;"
                >
                <!--ImageAndAssociatedText ^content_image | ^content_text -->
                  <img 
                  class="imgTeatType1"
                  src="{image}"
                  height="{height}"
                  width="{width}"
                  style="border-top-left-radius:{border_top_left_radius};
                  border-top-right-radius:{border_top_right_radius};
                  border-bottom-right-radius:{border_bottom_right_radius};
                  border-bottom-left-radius:{border_bottom_left_radius};
                  margin-top:{margin_top_image};margin-bottom:{margin_bottom_image};
                  margin-left:{margin_left_image};margin-right:{margin_right_image};"
                  
                  alt="memberTeatType1 Images" />
                  </div>
                </a>
                <div class="memberTeatType1-content">
                  <a 
                  class="aTeatType1"
                  >

                    <h3 
                    class="h3TeatType1 "

                    style="color:{color_title};font-family:{font_family};
                    font-size:{font_size};padding-top:{padding_top};
                    padding-bottom:{padding_bottom};padding-left:{padding_left};
                    padding-right:{padding_right};margin-top:{margin_top};
                    margin-bottom:{margin_bottom};margin-left:{margin_left};
                    margin-right:{margin_right};text-align:{text_align}"
                    onmouseover='this.style.color="{color_title_hover}"'
                    onmouseout='this.style.color="{color_title}"'

                    >
                   
                    {text}
                    
                  </h3>
                  </a>
                  <span 
                  class="spanTeatType1"
                  style="color:{color_description};font-family:{font_family};
                  font-size:{font_size};padding-top:{padding_top};
                  padding-bottom:{padding_bottom};padding-left:{padding_left};
                  padding-right:{padding_right};margin-top:{margin_top};
                  margin-bottom:{margin_bottom};margin-left:{margin_left};
                  margin-right:{margin_right};text-align:{text_align}"
                  onmouseover='this.style.color="{color_description_hover}"'
                  onmouseout='this.style.color="{color_description}"'
                  >
                  {description}
                  </span>
                  <div class="social-iconTeatType1">
                    <ul 
                    class="ulTeatType1"
                    >
                      {socialLinkReplacer}
                      
                     
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end section call -->
    `,
    social_icon_html : `
    <li 
           class="liTeatType1"
          style="background-color:{backgroundcolorContainer};
          border-top-left-radius:{borderRadiusTopLeft};border-top-right-radius:{borderRadiusTopRight};
          border-bottom-left-radius:{borderRadiusBottomLeft};border-bottom-right-radius:{borderRadiusBottomRight};
          width:{widthIcon};height:{heightIcon}"
          onmouseover='this.style.backgroundColor ="{background_color_hover}"'
          onmouseout='this.style.backgroundColor="{backgroundcolorContainer}"'

           >
            <a 
            class="aTeatType1"
            style="font-size:{font_size_icon};color:{color_icon};"
            onmouseover='this.style.color="{color_icon_hover}"'
            onmouseout='this.style.color="{color_icon}"'

          
            >
          <i class="{icon}"></i>
          </a>
      </li>
    `,
    hasSlider:false,
    show_desktop:true,
    show_tablet:true,
    show_mobile:true,
      item576: 1,
      item768 :1,
      item1200:3,
      autoplay:true,
      showDots:true,
      showArrows:true,
      mouseDrag:true,    
      history:[],
      title:{
      text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      color:"#070f4d",
      hover_color:"#070f4d",
      font_family:"'Poppins', sans-serif",
      font_size:"35px",
      padding_top:"0px",
      padding_bottom:"0px",
      padding_left:"0px",
      padding_right:"0px",
      margin_top:"0px",
      margin_bottom:"0px",
      margin_left:"0px",
      margin_right:"0px",
      text_align:"center",
    type:"title",
    lang:"en",
      },
      description:{
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto .",
        color:"#75799b",
        hover_color:"#75799b",
        font_family:"'Poppins', sans-serif",
        font_size:"13px",
        padding_top:"0px",
        padding_bottom:"0px",
        padding_left:"0px",
        padding_right:"0px",
        margin_top:"0px",
        margin_bottom:"0px",
        margin_left:"0px",
        margin_right:"0px",
        text_align:"center",
      type:"title",
      priority:"0",
      lang:"en",
        
      },
      title_html:
      `
      <h2 
      class="h2TeatType1"
      dir='ltr'
      style="color:{color_title};font-family:{font_family};
      font-size:{font_size};padding-top:{padding_top};
      padding-bottom:{padding_bottom};padding-left:{padding_left};
      padding-right:{padding_right};margin-top:{margin_top};
      margin-bottom:{margin_bottom};margin-left:{margin_left};
      margin-right:{margin_right};text-align:{text_align}"
      onmouseover='this.style.color="{color_title_hover}"'
      onmouseout='this.style.color="{color_title}"'
      >
      {text}
      </h2>
      `,
      description_html: `
      <p 
      class="pTeatType1"
      dir='ltr'
      style="color:{color_title};font-family:{font_family};
      font-size:{font_size};padding-top:{padding_top};
      padding-bottom:{padding_bottom};padding-left:{padding_left};
      padding-right:{padding_right};margin-top:{margin_top};
      margin-bottom:{margin_bottom};margin-left:{margin_left};
      margin-right:{margin_right};text-align:{text_align}"
      onmouseover='this.style.color="{color_title_hover}"'
      onmouseout='this.style.color="{color_title}"'
      >
      {text}
      </p>
      `,
      old_css:"css",
      global_style : [
        {
        type:"title",
        color:"#070f4d",
        hover_color:"#070f4d",
        font_family:"'Poppins', sans-serif",
        font_size:"20px",
        padding_top:"0px",
        padding_bottom:"0px",
        padding_left:"0px",
        padding_right:"0px",
        margin_top:"0px",
        margin_bottom:"0px",
        margin_left:"0px",
        margin_right:"0px",
        text_align:"center",
      } ,
      {
        type:"description",
        color:"#707070",
        hover_color:"#707070",
        font_family:"'Poppins', sans-serif",
        font_size:"14px",
        padding_top:"0px",
        padding_bottom:"0px",
        padding_left:"0px",
        padding_right:"0px",
        margin_top:"0px",
        margin_bottom:"0px",
        margin_left:"0px",
        margin_right:"0px",
        text_align:"center",
      },
      {
        type:"image",
        border_top_left_radius:"10px",
        border_top_right_radius:"10px",
        border_bottom_right_radius:"0px",
        border_bottom_left_radius:"0px",
        width:"300px",
        height:"300px",
        margin_top:"0px",
        margin_bottom:"0px",
        margin_left:"0px",
        margin_right:"0px",
        background_img:"white",
        widthBackground:"300px",
      heightBackground:"300px"
      },
      {
        container_margin_top:"0px",
        container_margin_bottom:"0px",
        container_margin_left:"0px",
        container_margin_right:"0px"
      },
      {
        backgroundContainercolor:"white",
        backgroundContainerImage:""
      },
      {
        type:"arrowLeft",
        color:"#070f4d",
        hover_color:"white",
        background_color:"#fff",
        background_hover_color:"blue",
        font_size:"16px",
        left:"1",
        top:"50"
      },
      {
        type:"arrowRight",
        color:"#070f4d",
        hover_color:"white",
        background_color:"#fff",
        background_hover_color:"blue",
        font_size:"16px",
        left:"1",
        top:"50"
      }             
      ],
}]