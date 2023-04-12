$(document).ready(function () {
  
  $(".faq-item__answer").hide();
  $(".faq-item__btn--more").show();
  $(".faq-item__btn--less").hide();

  $(".faq-item__btn--more").click(function () {
    var selectedItem = $(this).closest('.faq-item__index');
    selectedItem.find(".faq-item__answer").show();
    selectedItem.find(".faq-item__btn--less").show();
    selectedItem.find(".faq-item__btn--more").hide();
  });
  
  $(".faq-item__btn--less").click(function () {
    var selectedItem = $(this).closest('.faq-item__index');
    selectedItem.find(".faq-item__answer").hide();
    selectedItem.find(".faq-item__btn--more").show();
    selectedItem.find(".faq-item__btn--less").hide();
  });
});
