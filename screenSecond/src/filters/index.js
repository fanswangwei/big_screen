// // import parseTime, formatTime and set to filter
// export { parseTime, formatTime } from '@/utils'

// /**
//  * Show plural label if time is plural number
//  * @param {number} time
//  * @param {string} label
//  * @return {string}
//  */
// function pluralize(time, label) {
//   if (time === 1) {
//     return time + label
//   }
//   return time + label + 's'
// }

// /**
//  * @param {number} time
//  */
// export function timeAgo(time) {
//   const between = Date.now() / 1000 - Number(time)
//   if (between < 3600) {
//     return pluralize(~~(between / 60), ' minute')
//   } else if (between < 86400) {
//     return pluralize(~~(between / 3600), ' hour')
//   } else {
//     return pluralize(~~(between / 86400), ' day')
//   }
// }

// /**
//  * Number formatting
//  * like 10000 => 10k
//  * @param {number} num
//  * @param {number} digits
//  */
// export function numberFormatter(num, digits) {
//   const si = [
//     { value: 1E18, symbol: 'E' },
//     { value: 1E15, symbol: 'P' },
//     { value: 1E12, symbol: 'T' },
//     { value: 1E9, symbol: 'G' },
//     { value: 1E6, symbol: 'M' },
//     { value: 1E3, symbol: 'k' }
//   ]
//   for (let i = 0; i < si.length; i++) {
//     if (num >= si[i].value) {
//       return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
//     }
//   }
//   return num.toString()
// }

// /**
//  * 10000 => "10,000"
//  * @param {number} num
//  */
// export function toThousandFilter(num) {
//   return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
// }

// /**
//  * Upper case first char
//  * @param {String} string
//  */
// export function uppercaseFirst(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }
/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 * @author yanis.wang
 * @see http://yaniswang.com/frontend/2013/02/16/dateformat-performance/
 */
export function dateFormat (date, format) {
  if (typeof date === 'string') {
    var mts = date.match(/(\/Date\((\d+)\)\/)/)
    if (mts && mts.length >= 3) {
      date = parseInt(mts[2])
    }
  }
  date = new Date(date)
  if (!date || date.toUTCString() === 'Invalid Date') {
    return ''
  }
  var map = {
    'M': date.getMonth() + 1, // 月份
    'd': date.getDate(), // 日
    'h': date.getHours(), // 小时
    'm': date.getMinutes(), // 分
    's': date.getSeconds(), // 秒
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
  }

  format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
    var v = map[t]
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v
        v = v.substr(v.length - 2)
      }
      return v
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length)
    }
    return all
  })
  return format
}
