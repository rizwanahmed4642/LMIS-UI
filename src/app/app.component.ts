import { Component } from '@angular/core';
declare var $: any;  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jquery Integration With Angular!';  
  public input: any ;
  public output: any ;

  isJqueryWorking: any;  
  ngOnInit()  
  {  
    $(document).ready(() => {  
      this.isJqueryWorking = 'Jquery is working !!!';  
      alert(this.isJqueryWorking);

      $(document).ready(function () {
        $('#example').DataTable();
      });

      this.onloadfunc();

    });  

    
    


 


  
    
  }
    
  onload(){
    debugger
    $('.sidebar-toggle-view').on('click', '.sidebar-nav-item .nav-link',  (e: { preventDefault: () => void; }) => {
      if (!$("#wrapper").parents('#wrapper').hasClass('sidebar-collapsed')) {

        debugger
        var animationSpeed = 300,
          subMenuSelector = '.sub-group-menu',
          $this = $(),
          checkElement = $this.next();
        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
          checkElement.slideUp(animationSpeed, function () {
            checkElement.removeClass('menu-open');
          });
          checkElement.parent(".sidebar-nav-item").removeClass("active");
        } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
          var parent = $this.parents('ul').first();
          var ul = parent.find('ul:visible').slideUp(animationSpeed);
          ul.removeClass('menu-open');
          var parent_li = $this.parent("li");
          checkElement.slideDown(animationSpeed, function () {
            checkElement.addClass('menu-open');
            parent.find('.sidebar-nav-item.active').removeClass('active');
            parent_li.addClass('active');
          });
        }
        if (checkElement.is(subMenuSelector)) {
          e.preventDefault();
        }
      } else {
        if ($("#wrapper").attr('href') === "#") {
          e.preventDefault();
        }
      }
    });
  
    /*-------------------------------------
        Sidebar Menu Control
      -------------------------------------*/
    $(".sidebar-toggle").on("click", function () {
      window.setTimeout(function () {
        $("#wrapper").toggleClass("sidebar-collapsed");
      }, 500);
    });
  
    /*-------------------------------------
        Sidebar Menu Control Mobile
      -------------------------------------*/
    $(".sidebar-toggle-mobile").on("click", function () {
      $("#wrapper").toggleClass("sidebar-collapsed-mobile");
      if ($("#wrapper").hasClass("sidebar-collapsed")) {
        $("#wrapper").removeClass("sidebar-collapsed");
      }
    });
  
    /*-------------------------------------
        jquery Scollup activation code
     -------------------------------------*/
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade"
    });
  
    /*-------------------------------------
        jquery Scollup activation code
      -------------------------------------*/
    $("#preloader").fadeOut("slow",  () => {
      $("#wrapper").remove();
    });
   
  }

  
  onloadfunc(){
      /*-------------------------------------
      Sidebar Toggle Menu
    -------------------------------------*/
  $('.sidebar-toggle-view').on('click', '.sidebar-nav-item .nav-link',  (e: { preventDefault: () => void; }) => {
    if (!$(this).parents('#wrapper').hasClass('sidebar-collapsed')) {
      var animationSpeed = 300,
        subMenuSelector = '.sub-group-menu',
        $this = $(this),
        checkElement = $this.next();
      if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent(".sidebar-nav-item").removeClass("active");
      } 
      else {
        var parent = $this.parents('ul').first();
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        ul.removeClass('menu-open');
        var parent_li = $this.parent("li");
        debugger
        checkElement.addClass('menu-open');
          // parent.find('.sidebar-nav-item active').removeClass('active');
          parent_li.addClass('active');

        checkElement.slideDown(animationSpeed, function () {
          debugger
          checkElement.addClass('menu-open');
          parent.find('.sidebar-nav-item.active').removeClass('active');
          parent_li.addClass('active');
        });
      }
      
    } 
    else
    {
      debugger
      if ($(this).attr('href') === "#") {
        e.preventDefault();
      }
    }
  });

  /*-------------------------------------
      Sidebar Menu Control
    -------------------------------------*/
  $(".sidebar-toggle").on("click", function () {
    window.setTimeout(function () {
      $("#wrapper").toggleClass("sidebar-collapsed");
    }, 500);
  });

  /*-------------------------------------
      Sidebar Menu Control Mobile
    -------------------------------------*/
  $(".sidebar-toggle-mobile").on("click", function () {
    $("#wrapper").toggleClass("sidebar-collapsed-mobile");
    if ($("#wrapper").hasClass("sidebar-collapsed")) {
      $("#wrapper").removeClass("sidebar-collapsed");
    }
  });

  /*-------------------------------------
      jquery Scollup activation code
   -------------------------------------*/
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade"
  });

  /*-------------------------------------
      jquery Scollup activation code
    -------------------------------------*/
  $("#preloader").fadeOut("slow",  () => {
    $(this).remove();
  });
  }

  
  SubmenuClick(LiId: any, ULId: any){
    var animationSpeed = 300;
    if($('#'+ LiId).hasClass("nav-item sidebar-nav-item active"))
    {
      $('#'+ LiId).removeClass("active");
      $('#'+ ULId).slideUp(animationSpeed, function () {
        $('#'+ ULId).removeClass("menu-open");
        $('#'+ ULId).css("display", "none");
      });
    }
    else
    {
      $('#'+ ULId).slideDown(animationSpeed, function () {
        $('#'+ LiId).addClass("nav-item sidebar-nav-item active");
        $('#'+ ULId).addClass("menu-open");
        $('#'+ ULId).css("display", "block");
      });
    }
  }




}
