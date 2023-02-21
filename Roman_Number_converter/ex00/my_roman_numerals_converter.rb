def my_roman_numerals_converter(param_1)
# storing value as dictionary
    pop = { 1 => 'I',
                  2 => 'II',
                  3 => 'III',
                  4 => 'IV',
                  5 => 'V',
                  6 => 'VI',
                  7 => 'VII',
                  8 => 'VIII',
                  9 => 'IX',
                  10 => 'X',
                  20 => 'XX',
                  40 => 'XL',
                  50 => 'L',
                  30 => 'XXX',
                  60 => 'LX',
                  70 => 'LXX',
                  80 => 'LXXX',
                  90 => 'XC',
                  100 => 'C',
                  200 => 'CC',
                  300 => 'CCC',
                  400 => 'CD',
                  500 => 'D',
                  600 => 'DC',
                  700 => 'DCC',
                  800 => 'DCCC',
                  900 => 'CM',
                  1000 => 'M' }

    num = param_1.to_s
    thousand = ''
    hundred = ''
    ten = ''
    uni = ''
    
    my_list = []
    
    if num.length < 5
      case num.length
      when 4
        if num[0].to_i < 4 && num.length == 4
          thousand = 'M' * num[0].to_i
          my_list.append(thousand)
        end
        hundred = num[1] + '00'
        ten = num[2] + '0'
        uni = num[3]
        my_list.append(pop[hundred.to_i])
        my_list.append(pop[ten.to_i])
        my_list.append(pop[uni.to_i])
    
      when 3
        hundred = num[0] + '00'
        ten = num[1] + '0'
        uni = num[2]
        my_list.append(pop[hundred.to_i])
        my_list.append(pop[ten.to_i])
        my_list.append(pop[uni.to_i])
    
      when 2
        ten = num[0] + '0'
        uni = num[1]
        my_list.append(pop[ten.to_i])
        my_list.append(pop[uni.to_i])
    
      when 1
        uni = num[0]
        my_list.append(pop[uni.to_i])
      end
    
    end
    
    lent = my_list.length
    
    con = ""
    
    for k in 0..lent - 1
      ans = my_list[k].to_s
      con = con + ans
    end
    
    return con
  end