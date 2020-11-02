$(function(){

  function img_view(file_url, image_index_next_num) {
    let html = `<li>
                  <div class="item-img" data-index=${image_index_next_num}>
                    <img src=${file_url} alt="" class="item-img__src">
                    <div class="item-img__btns">
                      <a class="item-img__btn item-img__btn--delete">
                        削除
                      </a>
                      <a class="item-img__btn item-img__btn--edit">
                        編集
                      </a>
                    </div>
                  </div>
                </li>`
    return html
  }

  function img_field(image_index_next_num) {
    let html =`<input class="item-content__fileField" id="item-content__fileField${image_index_next_num}" data-index="${image_index_next_num}" type="file" name="item[images_attributes][${image_index_next_num}][name]">`
    return html
  }

  $("#js-image-file-fields").on("change", `input[type="file"]`, function(e) {
    let image_index_num = $(".item-content__fileField").last().data("index");
    let image_index_next_num = Number(image_index_num) + 1;
    let file = e.target.files[0];
    let new_file = new FileReader();
    let file_url = window.URL.createObjectURL(file);
    let img_field_num = $(".item-content__fileField").length
    let img_html = img_view(file_url, image_index_num);
    let img_field_html = img_field(image_index_next_num);

    $("#image-label").attr({for: `item-content__fileField${image_index_next_num}`, "data-index": `${image_index_next_num}`})
    $(".upload-letter").before(img_field_html);
    $(".item-new__imageLists").append(img_html);

    if(img_field_num > 4) {
      $(".upload-letter").hide();
    }
  })

  $(document).on("click", ".item-img__btn--delete", function() {
    let img_data_index = $(this).parent().parent().data("index");
    $(this).parent().parent().parent().remove();
    $(`#item-content__fileField${img_data_index}`).remove();

    let img_field_num = $(".item-content__fileField").length;
    console.log()
    if(img_field_num <= 5) {
      $(".upload-letter").removeAttr("style");
    }
  });
})