import config from '../../config/config';

export class VideoUploader{
  constructor(){
    this.iframeEl = $('#iframe_for_video');
    this.formEl = $('#form_for_video');
  }

  uploadVideo( ){
    return this.getTicket()
    .then(endPointUrl => {
      this.endPointUrl = endPointUrl;
      return this.doRealUpload();
    });
  }

  getTicket(){
    return $.ajax({
       url: '//wyng.com/hashtag/gallery/vimeo/get_ticket',
       type: 'POST',
    })
    .then(res => res.endpoint )
  }

  notifyBackend( videoId ){
    return $.ajax({
      type: 'POST',
      url: config.endpoint + config.middleWare + '/videos',
      data: JSON.stringify({videoId: videoId}),
      contentType: "application/json; charset=utf-8",
      json: true,
    })
    .then( function(res){
      console.log('Backend video ack: ', JSON.stringify(res, null, ' ') );
    });
  }

  doRealUpload(){
    this.formEl.attr('action', this.endPointUrl );
    var self = this;
    var task = $.Deferred(function(defer) {
      self.iframeEl.bind('load', function(){
        var q = this.contentWindow.location.search
        var videoId = decodeURIComponent( q ).split('/').pop();
        self.notifyBackend( videoId );
        defer.resolve( videoId );
        $(this).unbind('load');
      });
    });
    this.formEl.submit();
    return task;
  }

}
