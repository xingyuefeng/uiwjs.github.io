(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{423:function(e,n){!function(e){function n(e){return new RegExp("(\\()"+e+"(?=[\\s\\)])")}function a(e){return new RegExp("([\\s([])"+e+"(?=[\\s)])")}var t="[-+*/_~!@$%^=<>{}\\w]+",i="(\\()",r="(?=\\))",s="(?=\\s)",o={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]*|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:new RegExp("`"+t+"'")}},"quoted-symbol":{pattern:new RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:new RegExp(":"+t),alias:"property"},splice:{pattern:new RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:new RegExp(i+"(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)"+s),lookbehind:!0},{pattern:new RegExp(i+"(?:for|do|collect|return|finally|append|concat|in|by)"+s),lookbehind:!0}],declare:{pattern:n("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:n("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:a("(?:t|nil)"),lookbehind:!0},number:{pattern:a("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:new RegExp(i+"def(?:var|const|custom|group)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:new RegExp(t)}},defun:{pattern:new RegExp(i+"(?:cl-)?(?:defun\\*?|defmacro)\\s+"+t+"\\s+\\([\\s\\S]*?\\)"),lookbehind:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:new RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:new RegExp(i+"lambda\\s+\\((?:&?"+t+"\\s*)*\\)"),lookbehind:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:new RegExp(i+t),lookbehind:!0},punctuation:[/(['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},l={"lisp-marker":new RegExp("&[-+*/_~!@$%^=<>{}\\w]+"),rest:{argument:{pattern:new RegExp(t),alias:"variable"},varform:{pattern:new RegExp(i+t+"\\s+\\S[\\s\\S]*"+r),lookbehind:!0,inside:{string:o.string,boolean:o.boolean,number:o.number,symbol:o.symbol,punctuation:/[()]/}}}},p="\\S+(?:\\s+\\S+)*",d={pattern:new RegExp(i+"[\\s\\S]*"+r),lookbehind:!0,inside:{"rest-vars":{pattern:new RegExp("&(?:rest|body)\\s+"+p),inside:l},"other-marker-vars":{pattern:new RegExp("&(?:optional|aux)\\s+"+p),inside:l},keys:{pattern:new RegExp("&key\\s+"+p+"(?:\\s+&allow-other-keys)?"),inside:l},argument:{pattern:new RegExp(t),alias:"variable"},punctuation:/[()]/}};o.lambda.inside.arguments=d,o.defun.inside.arguments=e.util.clone(d),o.defun.inside.arguments.inside.sublist=d,e.languages.lisp=o,e.languages.elisp=o,e.languages.emacs=o,e.languages["emacs-lisp"]=o}(Prism)}}]);