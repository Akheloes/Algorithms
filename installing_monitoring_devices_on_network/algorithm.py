"""
Write the classes serving the representation of the problem. These classes are:
    - Segment;
    - Network
"""
class Segment:
    def __init__(self, first_end, second_end):
        self.first_end = first_end
        self.second_end = second_end

    def __str__(self):
        return '[ ' + self.first_end + ' , ' + self.second_end + ' ]' 

s = Segment('A', 'B')

print(str(s))