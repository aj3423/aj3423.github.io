function copy_to_clipboard(textToCopy) {
  try {
    // Attempt to use the Clipboard API (preferred)
    navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    // Fallback to creating a temporary element for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
}

$(document).ready(function () {
  MicroModal.init();

  chains.forEach((cfg) => {
    var btn = $(
      `<button id="btn_${cfg.main_asset}" class="btn_chain" style="border-color:${cfg.color}; color:${cfg.color}" >` +
        `<span class="btn_icon" style="background:url(${cfg.icon}) no-repeat;"></span>` +
        `<span class="btn_text">${cfg.chain}</span>` +
        `</button>`,
    );
    btn.on("click", function () {
      var no_choice = cfg.chain == "Others";
      var warning = "";
      if (no_choice) {
        warning =
          "Sorry but my <s>country</s> is not supportd by any of the donation platforms like github sponsors, Ko-Fi, Stripe, etc.";
      } else {
        var colorfy = (str) => {
          return `<span style="color:${cfg.color}"><b>${str}</b></span>`;
        };
        var a = colorfy(`${cfg.main_asset} (${cfg.chain})`);
        warning = `Only send ${a}`;
        if (cfg.tokens) {
          var standard = colorfy(cfg.token_standard);
          var tokens = colorfy(cfg.tokens.join(", "));
          warning += ` or ${tokens}(${standard})`;
        }
        warning +=
          " to this address, assets from other chains will be <b>lost forever</b>.";
      }

      $(".title").html(warning);
      $(".qr").attr("src", "");
      $(".qr").attr("src", cfg.wallet_qr);
      $(".wallet_address").text(cfg.wallet_address);
      if (no_choice) {
        $(".wallet_address").hide();
        $(".copy_btn").hide();
      } else {
        $(".wallet_address").show();
        $(".copy_btn").show();
      }

      MicroModal.show("modal-popup");
    });
    $("#center_div").append(btn);
  });

  var copy_btn = $(".copy_btn");
  var copy_address = "Copy Address";
  copy_btn.html(copy_address);
  copy_btn.on("click", function () {
    copy_to_clipboard($(".wallet_address").text());

    copy_btn.html("&#x2705; Copied");
    setTimeout(() => {
      copy_btn.html(copy_address);
    }, 2000);
  });
});
