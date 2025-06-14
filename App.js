import React, { useState } from "react";

const STUDENT_DATA = {
  "24AIBEA109": 9.709,
  "24AIBEA138": 9.651,
  "24MEBEA219": 9.57,
  "24COBEA150": 9.512,
  "24ELBEA168": 9.5,
  "24COBEA104": 9.407,
  "24ELBEA141": 9.384,
  "24ELBEA120": 9.36,
  "24ELBEA208": 9.198,
  "24COBEA124": 9.163,
  "24MEBEA268": 9.163,
  "24COBEA122": 9.151,
  "24ELBEA139": 9.14,
  "24ELBEA185": 9.128,
  "24COBEA141": 9.105,
  "24MEBEA235": 9.093,
  "24EEBEA171": 9.081,
  "24COBEA133": 9.035,
  "24EEBEA118": 9.012,
  "24MEBEA126": 9.012,
  "24EEBEA165": 8.988,
  "24VLBEA128": 8.977,
  "24AIBEA123": 8.953,
  "24COBEA146": 8.953,
  "24EEBEA174": 8.953,
  "24AIBEA102": 8.942,
  "24EEBEA128": 8.942,
  "24COBEA109": 8.93,
  "24COBEA137": 8.93,
  "24CHBEA149": 8.919,
  "24COBEA139": 8.919,
  "24COBEA168": 8.895,
  "24MEBEA112": 8.895,
  "24ELBEA175": 8.884,
  "24MEBEA204": 8.884,
  "24MEBEA231": 8.872,
  "24CHBEA116": 8.837,
  "24ELBEA125": 8.837,
  "24COBEA161": 8.814,
  "24COBEA175": 8.814,
  "24COBEA162": 8.814,
  "24AEBEA150": 8.802,
  "24COBEA111": 8.791,
  "24CHBEA127": 8.779,
  "24EEBEA162": 8.779,
  "24AIBEA131": 8.767,
  "24EEBEA115": 8.767,
  "24CEBEA251": 8.767,
  "24AIBEA108": 8.756,
  "24ELBEA160": 8.756,
  "24ELBEA181": 8.744,
  "24VLBEA142": 8.744,
  "24COBEA135": 8.733,
  "24AEBEA142": 8.709,
  "24COBEA114": 8.698,
  "24VLBEA118": 8.698,
  "24MEBEA132": 8.686,
  "24COBEA128": 8.674,
  "24VLBEA151": 8.674,
  "24CEBEA233": 8.674,
  "24MEBEA218": 8.674,
  "24PKBEA195": 8.663,
  "24CHBEA174": 8.663,
  "24COBEA115": 8.651,
  "24COBEA165": 8.651,
  "24CEBEA135": 8.64,
  "24CEBEA197": 8.64,
  "24COBEA144": 8.64,
  "24ELBEA198": 8.64,
  "24MEBEA136": 8.64,
  "24FTBEA118": 8.628,
  "24COBEA154": 8.616,
  "24ELBEA174": 8.616,
  "24ELBEA183": 8.616,
  "24MEBEA205": 8.605,
  "24COBEA112": 8.593,
  "24MEBEA212": 8.593,
  "24EEBEA155": 8.581,
  "24EEBEA163": 8.57,
  "24ELBEA106": 8.57,
  "24AIBEA136": 8.558,
  "24COBEA149": 8.558,
  "24ELBEA205": 8.558,
  "24MEBEA123": 8.558,
  "24MEBEA228": 8.558,
  "24MEBEA269": 8.558,
  "24MEBEA200": 8.547,
  "24COBEA132": 8.535,
  "24MEBEA102": 8.535,
  "24MEBEA159": 8.535,
  "24CEBEA166": 8.523,
  "24EEBEA164": 8.523,
  "24COBEA157": 8.512,
  "24EEBEA168": 8.512,
  "24EEBEA186": 8.512,
  "24MEBEA264": 8.5,
  "24ELBEA200": 8.488,
  "24CEBEA187": 8.477,
  "24ELBEA188": 8.477,
  "24EEBEA176": 8.477,
  "24MEBEA105": 8.477,
  "24EEBEA167": 8.465,
  "24AEBEA162": 8.465,
  "24EEBEA173": 8.453,
  "24COBEA156": 8.442,
  "24AIBEA124": 8.442,
  "24AIBEA142": 8.43,
  "24MEBEA104": 8.43,
  "24MEBEA233": 8.407,
  "24CEBEA153": 8.395,
  "24AIBEA147": 8.395,
  "24COBEA123": 8.384,
  "24AIBEA135": 8.372,
  "24COBEA138": 8.372,
  "24COBEA158": 8.372,
  "24MEBEA232": 8.36,
  "24CEBEA201": 8.36,
  "24EEBEA135": 8.36,
  "24CEBEA238": 8.36,
  "24VLBEA144": 8.337,
  "24AIBEA129": 8.326,
  "24MEBEA244": 8.326,
  "24CEBEA134": 8.326,
  "24CHBEA178": 8.326,
  "24ELBEA177": 8.326,
  "24AIBEA145": 8.326,
  "24VLBEA111": 8.314,
  "24COBEA126": 8.302,
  "24VLBEA127": 8.302,
  "24COBEA159": 8.291,
  "24CEBEA120": 8.291,
  "24AIBEA149": 8.291,
  "24MEBEA125": 8.291,
  "24MEBEA263": 8.279,
  "24CEBEA144": 8.267,
  "24ELBEA184": 8.267,
  "24ELBEA105": 8.256,
  "24MEBEA243": 8.244,
  "24CEBEA216": 8.244,
  "24MEBEA248": 8.233,
  "24EEBEA175": 8.233,
  "24MEBEA147": 8.233,
  "24EEBEA144": 8.209,
  "24CEBEA231": 8.209,
  "24ELBEA157": 8.198,
  "24CHBEA138": 8.186,
  "24COBEA102": 8.174,
  "24COBEA167": 8.174,
  "24VLBEA154": 8.174,
  "24MEBEA220": 8.174,
  "24VLBEA124": 8.163,
  "24AEBEA126": 8.14,
  "24ELBEA204": 8.14,
  "24EEBEA152": 8.128,
  "24CEBEA200": 8.116,
  "24ELBEA201": 8.116,
  "24MEBEA213": 8.116,
  "24AEBEA102": 8.105,
  "24COBEA166": 8.105,
  "24MEBEA215": 8.093,
  "24ELBEA210": 8.081,
  "24EEBEA182": 8.081,
  "24MEBEA272": 8.081,
  "24AEBEA135": 8.07,
  "24CEBEA161": 8.07,
  "24EEBEA160": 8.058,
  "24COBEA143": 8.047,
  "24ELBEA206": 8.047,
  "24EEBEA189": 8.035,
  "24EEBEA181": 8.023,
  "24COBEA163": 8.023,
  "24MEBEA224": 8.023,
  "24MEBEA194": 8.012,
  "24AIBEA143": 8.0,
  "24MEBEA266": 8.0,
  "24MEBEA124": 7.988,
  "24ELBEA203": 7.988,
  "24VLBEA153": 7.988,
  "24MEBEA252": 7.977,
  "24COBEA147": 7.977,
  "24ELBEA102": 7.977,
  "24FTBEA148": 7.965,
  "24CHBEA144": 7.953,
  "24ELBEA192": 7.953,
  "24CHBEA147": 7.942,
  "24MEBEA144": 7.942,
  "24CEBEA229": 7.942,
  "24EEBEA191": 7.93,
  "24MEBEA118": 7.93,
  "24CHBEA195": 7.919,
  "24EEBEA193": 7.907,
  "24PKBEA103": 7.895,
  "24CEBEA244": 7.895,
  "24VLBEA148": 7.884,
  "24MEBEA202": 7.884,
  "24VLBEA131": 7.872,
  "24ELBEA167": 7.86,
  "24CEBEA170": 7.849,
  "24AIBEA133": 7.837,
  "24MEBEA249": 7.837,
  "24ELBEA166": 7.837,
  "24EEBEA184": 7.837,
  "24MEBEA217": 7.837,
  "24CEBEA246": 7.837,
  "24COBEA160": 7.826,
  "24EEBEA187": 7.826,
  "24CEBEA143": 7.814,
  "24CHBEA135": 7.802,
  "24ELBEA194": 7.802,
  "24CEBEA142": 7.779,
  "24ELBEA154": 7.779,
  "24MEBEA184": 7.779,
  "24COBEA134": 7.767,
  "24ELBEA182": 7.767,
  "24CEBEA199": 7.756,
  "24ELBEA166": 7.837,
  "24EEBEA184": 7.837,
  "24MEBEA217": 7.837,
  "24CEBEA246": 7.837,
  "24COBEA160": 7.826,
  "24EEBEA187": 7.826,
  "24CEBEA143": 7.814,
  "24CHBEA135": 7.802,
  "24ELBEA194": 7.802,
  "24CEBEA142": 7.779,
  "24ELBEA154": 7.779,
  "24MEBEA184": 7.779,
  "24COBEA134": 7.767,
  "24ELBEA182": 7.767,
  "24CEBEA199": 7.756,
  "24MEBEA209": 7.756,
  "24CEBEA202": 7.756,
  "24EEBEA183": 7.756,
  "24MEBEA259": 7.744,
  "24EEBEA188": 7.744,
  "24AEBEA132": 7.733,
  "24COBEA152": 7.733,
  "24MEBEA251": 7.733,
  "24ELBEA220": 7.733,
  "24CHBEA181": 7.733,
  "24MEBEA199": 7.721,
  "24EEBEA198": 7.709,
  "24ELBEA164": 7.709,
  "24AEBEA159": 7.698,
  "24MEBEA206": 7.698,
  "24EEBEA195": 7.686,
  "24CEBEA103": 7.674,
  "24ELBEA202": 7.674,
  "24CEBEA213": 7.663,
  "24EEBEA157": 7.628,
  "24CEBEA230": 7.628,
  "24PKBEA210": 7.605,
  "24CHBEA151": 7.605,
  "24CEBEA217": 7.605,
  "24EEBEA196": 7.593,
  "24PKBEA201": 7.593,
  "24EEBEA102": 7.581,
  "24FTBEA163": 7.581,
  "24MEBEA117": 7.581,
  "24MEBEA170": 7.581,
  "24MEBEA267": 7.581,
  "24ELBEA199": 7.558,
  "24MEBEA230": 7.558,
  "24ELBEA152": 7.547,
  "24PKBEA211": 7.523,
  "24MEBEA257": 7.523,
  "24COBEA148": 7.5,
  "24CHBEA185": 7.5,
  "24COBEA174": 7.488,
  "24CHBEA101": 7.477,
  "24PKBEA213": 7.465,
  "24ELBEA171": 7.465,
  "24AIBEA132": 7.453,
  "24EEBEA185": 7.453,
  "24MEBEA203": 7.453,
  "24CHBEA186": 7.453,
  "24CHBEA177": 7.43,
  "24EEBEA197": 7.43,
  "24MEBEA145": 7.43,
  "24VLBEA157": 7.419,
  "24VLBEA152": 7.407,
  "24CEBEA108": 7.407,
  "24CEBEA190": 7.384,
  "24AEBEA165": 7.384,
  "24CEBEA259": 7.384,
  "24MEBEA160": 7.372,
  "24MEBEA238": 7.372,
  "24CEBEA247": 7.372,
  "24CHBEA118": 7.349,
  "24CHBEA134": 7.349,
  "24EEBEA161": 7.349,
  "24ELBEA115": 7.349,
  "24PKBEA184": 7.349,
  "24CEBEA152": 7.337,
  "24MEBEA207": 7.337,
  "24CEBEA159": 7.326,
  "24ELBEA170": 7.314,
  "24CEBEA225": 7.314,
  "24VLBEA136": 7.314,
  "24MEBEA265": 7.314,
  "24MEBEA185": 7.291,
  "24CEBEA214": 7.291,
  "24AEBEA128": 7.267,
  "24AIBEA115": 7.267,
  "24CEBEA189": 7.267,
  "24CEBEA205": 7.267,
  "24ELBEA180": 7.256,
  "24VLBEA116": 7.256,
  "24CHBEA152": 7.244,
  "24VLBEA150": 7.233,
  "24EEBEA170": 7.233,
  "24COBEA164": 7.233,
  "24VLBEA112": 7.233,
  "24AEBEA153": 7.221,
  "24AEBEA152": 7.209,
  "24EEBEA158": 7.209,
  "24ELBEA221": 7.198,
  "24MEBEA240": 7.198,
  "24MEBEA234": 7.174,
  "24CEBEA224": 7.174,
  "24MEBEA165": 7.163,
  "24MEBEA188": 7.163,
  "24COBEA169": 7.151,
  "24CEBEA178": 7.14,
  "24AIBEA101": 7.128,
  "24CEBEA122": 7.047,
  "24CEBEA176": 7.047,
  "24VLBEA140": 7.047,
  "24CHBEA175": 7.023,
  "24EEBEA194": 7.012,
  "24MEBEA111": 7.012,
  "24VLBEA125": 7.012,
  "24MEBEA226": 7,
  "24MEBEA271": 6.988,
  "24CEBEA242": 6.977,
  "24CHBEA183": 6.965,
  "24CEBEA234": 6.965,
  "24VLBEA129": 6.965,
  "24ELBEA215": 6.93,
  "24EEBEA131": 6.919,
  "24MEBEA162": 6.919,
  "24VLBEA145": 6.907,
  "24AIBEA154": 6.907,
  "24ELBEA209": 6.907,
  "24ELBEA212": 6.884,
  "24CHBEA133": 6.872,
  "24ELBEA187": 6.86,
  "24CEBEA237": 6.837,
  "24PKBEA148": 6.837,
  "24AIBEA140": 6.837,
  "24CEBEA253": 6.826,
  "24VLBEA147": 6.802,
  "24CEBEA158": 6.802,
  "24AEBEA160": 6.802,
  "24CEBEA207": 6.802,
  "24ELBEA161": 6.791,
  "24CEBEA236": 6.791,
  "24MEBEA255": 6.791,
  "24PKBEA174": 6.791,
  "24CEBEA220": 6.779,
  "24COBEA108": 6.779,
  "24COBEA119": 6.779,
  "24ELBEA149": 6.779,
  "24CHBEA170": 6.779,
  "24ELBEA213": 6.767,
  "24COBEA117": 6.756,
  "24EEBEA179": 6.756,
  "24EEBEA154": 6.709,
  "24AEBEA156": 6.709,
  "24CEBEA257": 6.709,
  "24AIBEA150": 6.698,
  "24VLBEA155": 6.686,
  "24EEBEA151": 6.674,
  "24VLBEA159": 6.616,
  "24MEBEA193": 6.605,
  "24VLBEA156": 6.593,
  "23CEBEA114": 6.581,
  "24ELBEA219": 6.581,
  "24AEBEA131": 6.57,
  "24MEBEA186": 6.57,
  "24MEBEA197": 6.57,
  "24PKBEA196": 6.558,
  "24CEBEA110": 6.547,
  "24CHBEA176": 6.547,
  "24MEBEA262": 6.535,
  "24AEBEA148": 6.523,
  "24MEBEA273": 6.512,
  "24ELBEA145": 6.465,
  "24CEBEA232": 6.465,
  "24MEBEA237": 6.465,
  "24PKBEA208": 6.453,
  "24ELBEA129": 6.453,
  "24AIBEA148": 6.43,
  "24MEBEA196": 6.43,
  "24CHBEA111": 6.419,
  "24CHBEA189": 6.419,
  "24PKBEA129": 6.407,
  "24MEBEA250": 6.395,
  "24ELBEA189": 6.384,
  "24CEBEA124": 6.36,
  "24AIBEA151": 6.36,
  "24ELBEA163": 6.337,
  "24AIBEA152": 6.326,
  "24COBEA173": 6.314,
  "24AEBEA167": 6.291,
  "24MEBEA256": 6.291,
  "24FTBEA126": 6.267,
  "24COBEA170": 6.267,
  "24MEBEA201": 6.244,
  "24CEBEA116": 6.233,
  "24MEBEA279": 6.209,
  "24PKBEA132": 6.209,
  "24AEBEA149": 6.186,
  "24MEBEA140": 6.186,
  "24MEBEA229": 6.163,
  "24ELBEA207": 6.163,
  "24ELBEA207": 6.163,
  "24PKBEA172": 6.14,
  "24CEBEA221": 6.14,
  "24CEBEA261": 6.105,
  "24ELBEA196": 6.093,
  "24PKBEA206": 6.058,
  "24EEBEA205": 6.058,
  "24PKBEA119": 6.058,
  "24MEBEA277": 6.047,
  "24CEBEA215": 6.035,
  "24EEBEA121": 5.953,
  "24MEBEA276": 5.942,
  "24PKBEA171": 5.895,
  "24CHBEA130": 5.884,
  "24MEBEA222": 5.884,
  "24PKBEA215": 5.872,
  "24MEBEA270": 5.86,
  "24MEBEA253": 5.86,
  "24EEBEA199": 5.86,
  "24MEBEA137": 5.86,
  "24COBEA105": 5.802,
  "24MEBEA282": 5.744,
  "24EEBEA136": 5.721,
  "24MEBEA278": 5.709,
  "24AIBEA141": 5.674,
  "24ELBEA191": 5.663,
  "24CHBEA188": 5.628,
  "24CHBEA171": 5.581,
  "24CEBEA223": 5.558,
  "24CEBEA245": 5.535,
  "24CEBEA194": 5.523,
  "24EEBEA169": 5.43,
  "24AIBEA155": 5.372,
  "24CEBEA255": 5.337,
  "24VLBEA143": 5.314,
  "24COBEA176": 5.302,
  "24CEBEA248": 5.302,
  "24AEBEA158": 5.279,
  "24MEBEA198": 5.279,
  "24PKBEA143": 5.279,
  "24AEBEA155": 5.256,
  "24VLBEA120": 5.244,
  "24CEBEA250": 5.198,
  "24FTBEA144": 5.174,
  "24PKBEA200": 5.174,
  "24MEBEA191": 5.14,
  "24EEBEA106": 5.105,
  "24MEBEA114": 5.105,
  "24CHBEA184": 5.058,
  "24CHBEA192": 5.058,
  "24FTBEA159": 4.988,
  "24AIBEA144": 4.977,
  "24COBEA101": 4.953,
  "24FTBEA123": 4.953,
  "24EEBEA200": 4.93,
  "24ELBEA217": 4.919,
  "24VLBEA126": 4.814,
  "24COBEA121": 4.733,
  "24MEBEA192": 4.721,
  "24AIBEA153": 4.663,
  "24AEBEA127": 4.628,
  "24COBEA172": 4.593,
  "24VLBEA149": 4.581,
  "24CEBEA113": 4.558,
  "24AEBEA164": 4.477,
  "24EEBEA207": 4.419,
  "24FTBEA165": 4.349,
  "24AEBEA144": 4.337,
  "24EEBEA202": 4.198,
  "24CHBEA190": 4.198,
  "24MEBEA187": 4.186,
  "24EEBEA208": 4.174,
  "24ELBEA211": 4.116,
  "24EEBEA159": 4.081,
  "24EEBEA206": 4.035,
  "24EEBEA105": 3.988,
  "24EEBEA201": 3.942,
  "24ELBEA214": 3.942,
  "24MEBEA286": 3.849,
  "24ELBEA223": 3.756,
  "24PKBEA162": 3.733,
  "24CEBEA249": 3.651,
  "24EEBEA210": 3.651,
  "24CHBEA194": 3.581,
  "24VLBEA146": 3.5,
  "24COBEA155": 3.5,
  "24COBEA120": 3.384,
  "24VLBEA110": 3.302,
  "24FTBEA162": 3.267,
  "24MEBEA216": 3.256,
  "24MEBEA275": 3.209,
  "24CEBEA254": 3.128,
  "24MEBEA285": 3.093,
  "24COBEA110": 3.081,
  "24CEBEA171": 3.035,
  "24AIBEA137": 3.023,
  "24PKBEA105": 3,
  "24AEBEA163": 2.93,
  "24EEBEA124": 2.791,
  "24CHBEA123": 2.698,
  "24CEBEA198": 2.674,
  "24EEBEA222": 2.512,
  "24COBEA171": 2.395,
  "24EEBEA150": 2.372,
  "24CEBEA262": 2.326,
  "24MEBEA155": 2.326,
  "24CEBEA239": 2.302,
  "24MEBEA280": 2.256,
  "24ELBEA172": 2.244,
  "24ELBEA186": 1.942,
  "24MEBEA283": 1.442,
  "24CHBEA161": 0.419,
  "24CEBEA196": 0.349,
  "24EEBEA172": 0.349,
  "24PKBEA214": 0.279,
  "24MEBEA261": 0.0,
  "24AEBEA143": 0.0,
  "24AEBEA125": 0.0,
  "24AEBEA133": 0.0,
  "24COBEA153": 0.0,
  "24AIBEA130": 0.0,
  "24CEBEA101": 0.0,
  "24CEBEA140": 0.0,
  "24CEBEA151": 0.0,
  "24PKBEA212": 0.0,
  "24CEBEA184": 0.0,
  "24AEBEA147": 0.0,
  "24CHBEA104": 0.0,
  "24AEBEA145": 0.0,
  "24MEBEA236": 0.0,
  "24MEBEA242": 0.0,
  "24COBEA107": 0.0,
  "24AEBEA161": 0.0,
  "24CHBEA179": 0.0,
  "24FTBEA166": 0.0,
  "24MEBEA274": 0.0,
  "24PKBEA204": 0.0,
  "24PKBEA209": 0.0,
  "24CHBEA193": 0.0,
  "24COBEA129": 0.0,
  "24COBEA142": 0.0,
  "24COBEA145": 0.0,
  "24COBEA151": 0.0,
  "24ELBEA197": 0.0,
  "24EEBEA117": 0.0,
  "24ELBEA195": 0.0,
  "24EEBEA149": 0.0,
  "24EEBEA153": 0.0,
  "24EEBEA156": 0.0,
  "24PKBEA163": 0.0,
  "24EEBEA166": 0.0,
  "24EEBEA177": 0.0,
  "24ELBEA107": 0.0,
  "24ELBEA138": 0.0,
  "24ELBEA143": 0.0,
  "24ELBEA144": 0.0,
  "24ELBEA148": 0.0,
  "24AIBEA146": 0.0,
  "24ELBEA169": 0.0,
  "24ELBEA176": 0.0,
  "24CEBEA206": 0.0,
  "24FTBEA125": 0.0,
  "24CEBEA235": 0.0,
  "24MEBEA135": 0.0,
  "24MEBEA138": 0.0,
  "24MEBEA139": 0.0,
  "24EEBEA190": 0.0,
  "24EEBEA180": 0.0,
  "24EEBEA192": 0.0,
  "24MEBEA258": 0.0,
  "24MEBEA195": 0.0,
  "24MEBEA208": 0.0,
  "24PKBEA202": 0.0,
  "24CEBEA252": 0.0,
  "24FTBEA154": 0.0,
  "24PKBEA197": 0.0,
  "24PKBEA198": 0.0,
  "24MEBEA211": 0.0,
  "24MEBEA214": 0.0,
  "24MEBEA221": 0.0,
  "24CEBEA211": 0.0,
  "24MEBEA254": 0.0,
  "24CHBEA154": 0.0,
  "24PKBEA144": 0.0,
  "24PKBEA175": 0.0,
  "24PKBEA176": 0.0,
  "24CEBEA240": 0.0,
  "24PKBEA183": 0.0
};

const BRANCH_CUTOFFS = {
  "Computer Engineering": 9.19,
  "Artificial Intelligence": 8.80,
  "Electronics and Comm Engineering": 8.76,
  "Electrical Engineering": 8.35,
  "VLSI": 8.40,
  "Mechanical Engineering": 7.5,
  "Automobile Engineering": 7.5,
  "Civil Engineering": 7.5,
  "Chemical Engineering": 7.5,
  "Petrochemical Engineering": 7.5,
  "Food Technology": 7.5
};

const BRANCH_ORDER = [
  "Computer Engineering",
  "Artificial Intelligence",
  "Electronics and Comm Engineering",
  "Electrical Engineering",
  "VLSI",
  "Mechanical Engineering",
  "Automobile Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Petrochemical Engineering",
  "Food Technology"
];

const getCurrentBranch = (faculty) => {
  if (faculty.startsWith("24COBEA")) return "Computer Engineering";
  if (faculty.startsWith("24AIBEA")) return "Artificial Intelligence";
  if (faculty.startsWith("24ELBEA")) return "Electronics and Comm Engineering";
  if (faculty.startsWith("24EEBEA")) return "Electrical Engineering";
  if (faculty.startsWith("24VLBEA")) return "VLSI";
  if (faculty.startsWith("24MEBEA")) return "Mechanical Engineering";
  if (faculty.startsWith("24AEBEA")) return "Automobile Engineering";
  if (faculty.startsWith("24CEBEA")) return "Civil Engineering";
  if (faculty.startsWith("24CHBEA")) return "Chemical Engineering";
  if (faculty.startsWith("24PKBEA")) return "Petrochemical Engineering";
  if (faculty.startsWith("24FTBEA")) return "Food Technology";
  return null;
};

export default function App() {
  const [facultyNumber, setFacultyNumber] = useState("");
  const [cgpa, setCgpa] = useState(undefined);
  const [currentBranch, setCurrentBranch] = useState(null);
  const [eligible, setEligible] = useState(true);
  const [result, setResult] = useState("");
  const [choices, setChoices] = useState([]);
  const [infoMsg, setInfoMsg] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchCGPA = () => {
    const fn = facultyNumber.trim().toUpperCase();
    const branch = getCurrentBranch(fn);
    setCurrentBranch(branch);
    const gpa = STUDENT_DATA[fn];

    setChoices([]);
    setInfoMsg("");
    setResult("");

    if (gpa === undefined) {
      setCgpa(undefined);
      setResult("❌ Faculty number not found.");
      return;
    }

    setCgpa(gpa);

    if (gpa < 7.5) {
      setEligible(false);
      setResult("❌ Your CGPA is below the minimum required for upgradation.");
    } else if (branch === "Food Technology") {
      setEligible(true);
      setInfoMsg("⚠️ Your branch has limited strength. Chances depend on seat availability.");
    } else if (branch === "Automobile Engineering" && gpa < 8.46) {
      setEligible(false);
      setResult("⚠️ Only top AE students can upgrade due to branch strength. You may still have a chance if seat movement allows.");
    } else if (branch === "Petrochemical Engineering" && gpa < 7.89) {
      setEligible(false);
      setResult("⚠️ Only top PK students can upgrade due to branch strength. You may still have a chance if seat movement allows.");
    } else {
      setEligible(true);
    }
  };

  const availableBranches = BRANCH_ORDER.filter(
    (b) => b !== currentBranch && !choices.includes(b)
  );

  const addChoice = (branch) => {
    if (choices.length < 3) setChoices([...choices, branch]);
  };

  const checkEligibility = () => {
    if (!eligible || cgpa === undefined) return;

    for (let branch of choices) {
      if (cgpa >= BRANCH_CUTOFFS[branch]) {
        setResult(`✅ Based on CGPA ${cgpa}, you may get ${branch}.`);
        return;
      }
    }

    setResult(
      `❌ CGPA ${cgpa} doesn't meet the cutoff for any of your preferred branches (excluding your current branch: ${currentBranch}). BUT DO NOT LOSE HOPE.`
    );
  };

  return (
    <div style={{
      maxWidth: "650px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9",
      color: darkMode ? "#f1f1f1" : "#111",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      position: "relative"
    }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          border: "none",
          fontSize: "1.4rem",
          cursor: "pointer",
          color: darkMode ? "#fff" : "#000"
        }}
        title="Toggle Dark Mode"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      <h2 style={{ fontSize: "1.6rem", marginBottom: "20px", textAlign: "center" }}>
        🔍 Branch Upgradation Checker
      </h2>

      <label style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "8px", display: "block" }}>
        Enter Faculty Number:
      </label>
      <input
        type="text"
        value={facultyNumber}
        onChange={(e) => setFacultyNumber(e.target.value)}
        placeholder="e.g. 24EEBEA118"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "16px"
        }}
      />
      <button
        onClick={fetchCGPA}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #007bff",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Fetch CGPA
      </button>

      {cgpa !== undefined && (
        <>
          <div style={{ fontWeight: "bold", color: "green", marginBottom: "10px" }}>
            🎓 CGPA Found: {cgpa}
          </div>

          {currentBranch && (
            <div style={{ marginBottom: "10px", fontSize: "0.95rem", color: darkMode ? "#ccc" : "#666" }}>
              📌 Current Branch Detected: <strong>{currentBranch}</strong>
            </div>
          )}

          {infoMsg && (
            <div style={{ marginBottom: "10px", fontSize: "0.9rem", color: "#bb8800" }}>
              {infoMsg}
            </div>
          )}

          {eligible && choices.length < 3 && (
            <>
              <label style={{ fontWeight: "bold", marginTop: "20px", display: "block" }}>
                Choose your preferred branch ({choices.length + 1}/3):
              </label>
              <ul style={{ marginBottom: "15px", paddingLeft: "20px" }}>
                {availableBranches.map((branch) => (
                  <li key={branch}>
                    <button
                      onClick={() => addChoice(branch)}
                      title={`Cutoff: ${BRANCH_CUTOFFS[branch]}`}
                      style={{
                        margin: "5px 0",
                        padding: "8px 14px",
                        border: "1px solid #007bff",
                        backgroundColor: darkMode ? "#333" : "white",
                        color: darkMode ? "#fff" : "#007bff",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}
                    >
                      ➕ {branch}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {choices.length > 0 && (
            <div style={{ marginBottom: "10px" }}>
              <strong>Selected Preferences:</strong>
              <div style={{ marginTop: "10px" }}>
                {choices.map((branch, index) => (
                  <div key={index} style={{ fontSize: "1rem", marginBottom: "6px" }}>
                    {index + 1}. {branch}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: "20px" }}>
            <button
              onClick={checkEligibility}
              style={{ padding: "10px 20px", marginRight: "10px" }}
            >
              ✅ Check Eligibility
            </button>

            <button
              onClick={() => {
                setChoices([]);
                setResult("");
                setInfoMsg("");
              }}
              style={{ padding: "10px 20px" }}
            >
              🔄 Reset Preferences
            </button>
          </div>
        </>
      )}

      {result && (
        <div style={{
          marginTop: "20px",
          padding: "12px",
          backgroundColor: result.includes("✅")
            ? (darkMode ? "#2d4837" : "#e6f4ea")
            : (darkMode ? "#472c2c" : "#ffe8e8"),
          color: result.includes("✅")
            ? (darkMode ? "#a8e6b2" : "#155724")
            : (darkMode ? "#f9bcbc" : "#721c24"),
          border: "1px solid",
          borderColor: result.includes("✅")
            ? (darkMode ? "#4c946b" : "#c3e6cb")
            : (darkMode ? "#8b4c4c" : "#f5c6cb"),
          borderRadius: "6px"
        }}>
          {result}
        </div>
      )}

      <p style={{ marginTop: "40px", fontSize: "0.85rem", color: darkMode ? "#aaa" : "#666", textAlign: "center" }}>
        💻⚙️ Compiled with logic and ☕ caffeine by <strong>Avan Usmani</strong>
      </p>
    </div>
  );
}


