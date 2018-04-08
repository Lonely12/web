/**
 * Created by joustany on 17/12/27.
 */
var imgOne = '<img class="imgOne pull-left" src="./images/早餐/图层%2019.png" alt="">' +
    '<img class="imgTow pull-left" src="./images/早餐/图层%2023.png" alt="">' +
    '<img class="imgthree pull-left" src="./images/早餐/图层%2024.png" alt="">' +
    '<img class="imgfour pull-left" src="./images/早餐/图层%2025.png" alt="">' +
    '<img class="imgfive pull-left" src="./images/早餐/图层%2026.png" alt="">'
$(document).ready(function () {
    $('.heart-content .heart-con').mouseenter(function (e){
        // console.log(e)
        e.stopPropagation()
        // $('.heart-content .one-accordion').css( 'width', '50%')
        // console.log($(this).find('img'))
        $(this).stop().animate({'width':'44.091%'},300)
        $(this).siblings().stop().animate({'width':'18.55%'},300)
        $(this).find('.heart-icon').stop().removeClass('shade')
        // $(this).find('.img').animate({'left':'-500px'},1000)
        $(this).find('.img').stop().hide()
        // $(this).find('.img').fadeOut()
        $(this).find('.heart-icon_content img').stop().hide()
        $(this).find('.heart-icon_content .heart-title').stop().animate({'bottom':'0'},300)
        // $(this).siblings().animate({'width':'20%'})
        // $(this).html(imgOne)
    }).mouseleave(function (e){
            "use strict"
        $(this).find('.heart-icon_content .heart-title').stop().animate({'bottom':'80%'},300)
        $(this).find('.img').stop().animate({'left':'-100px'})
        $(this).find('.img').stop().fadeIn()
        $(this).find('.heart-icon').stop().addClass('shade')
        $(this).find('.heart-icon').stop().addClass('shade')
        $(this).find('.heart-icon_content img').stop().fadeIn()
        })
    $('.heart-content').mouseleave(function (e){
        "use strict"
        // e.stopPropagation()
        // console.log('a')
        $(this).find('.heart-con').stop().animate({'width':'25%'})
    })
    // $('.service-right_img img').hover(function () {
    //     // $(this).delay(300).addClass('imgHover')
    //     $(this).animate({'top':'-10px'},200)
    // },function () {
    //     $(this).animate({'top':'0'},200)
    // })
})
function applyHandle() {

}
