var openModal = function(opts) {
  if (typeof opts === 'string') {
    opts = { body: opts }
  }
  var modal = $('#modal')
  if (opts.size) {
    modal.find('.modal-dialog').addClass(`modal-${opts.size}`)
  }
  if (opts.footer) {
    modal.find('.modal-footer .left-content').html(opts.footer)
  }
  modal.find('.modal-title').html(opts.title)
  modal.find('.modal-body').html(opts.body)
  modal.modal()
}

var embedInModal = function(e, opts = {}) {
  e.preventDefault()
  if (typeof opts === 'string') {
    opts = { url: opts }
  }
  Object.assign(opts, $(e.target).data())
  openModal({
    title: opts.title,
    body: `<iframe width=100% src=${opts.url}></iframe>`,
    size: 'lg',
    footer: `<a href=${opts.url} target="_blank">View in New Window</a>`
  })
}
