RealmEye.initializeCreateThread=function(e,t,i,n,a){var l=$("#"+e),u=$(".btn:first-child",l),c=$(".modal",l),s=$("input[name=participants]",c);t||(s.select2({minimumInputLength:1,maximumSelectionSize:50,multiple:!0,ajax:$.extend(i,{dataType:"json",quietMillis:400,data:function(e,t){return completeData({term:e})},results:function(e,t){return{results:$.map(e,function(e){return{id:e,text:e}})}}})}),a&&s.select2("data",$.map(a,function(e){return{id:e,text:e}}))),u.click(function(){c.modal("show")}),RealmEye.initializeEditor($(":input[name=body]",c),$(".send",c),$(":input[type=checkbox]",c),$(".preview .message-text",c),n,function(e){e.subject=$(":input[name=subject]",c).val(),e.participants=t?"guild":s.select2("val").join(","),e.minGuildRankToRead=t?$(":input[name=minrank]",c).val():-1})},RealmEye.initializeMarkAllGuildMessagesAsRead=function(e,t){$("#"+e).click(function(){confirm("Are you sure you want to mark all messages as read?")&&callSpecAndReload(t)})};