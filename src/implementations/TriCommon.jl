"""
"""
abstract type AbstractTri{N, D} <: ReferenceFEType{N, D} end

"""
"""
struct Tri3 <: AbstractTri{3, 2}
  degree::Int64
end

"""
"""
struct Tri6 <: AbstractTri{6, 2}
  degree::Int64
end

types_to_generate = (
  (:(SVector{2, Float32}), :Float32),
  (:(SVector{2, Float64}), :Float64),
  (:(MVector{2, Float32}), :Float32),
  (:(MVector{2, Float64}), :Float64),
  # (:(Vector{Float64}), :Float64)
)

for type_pair in types_to_generate
  """
  """
  @eval function quadrature_points_and_weights(
    e::E, 
    ::Type{$(type_pair[1])},
    ::Type{$(type_pair[2])}
  ) where E <: AbstractTri

    if degree(e) == 1
      ξs    = Vector{$(type_pair[1])}(undef, 1)
      ξs[1] = $(type_pair[1])(1. / 3., 1. / 3.)
      ws    = $(type_pair[2])[0.5]
    elseif degree(e) == 2
      # ξs = Ftype[
      #   2. / 3. 1. / 6. 1. / 6.;
      #   1. / 6. 2. / 3. 1. / 6
      # ]
      ξs    = Vector{$(type_pair[1])}(undef, 3)
      ξs[1] = $(type_pair[1])(2. / 3., 1. / 6.)
      ξs[2] = $(type_pair[1])(1. / 6., 2. / 3.)
      ξs[3] = $(type_pair[1])(1. / 6., 1. / 6.)
      ws    = $(type_pair[2])[1. / 6., 1. / 6., 1. / 6.]
    elseif degree(e) <= 4
      # ξs = Ftype[
      #   1.081030181680700E-01 4.459484909159650E-01 4.459484909159650E-01 8.168475729804590E-01 9.157621350977100E-02 9.157621350977100E-02;
      #   4.459484909159650E-01 1.081030181680700E-01 4.459484909159650E-01 9.157621350977100E-02 8.168475729804590E-01 9.157621350977100E-02
      # ]
      ξs    = Vector{$(type_pair[1])}(undef, 6)
      ξs[1] = $(type_pair[1])(1.081030181680700E-01, 4.459484909159650E-01)
      ξs[2] = $(type_pair[1])(4.459484909159650E-01, 1.081030181680700E-01)
      ξs[3] = $(type_pair[1])(4.459484909159650E-01, 4.459484909159650E-01)
      ξs[4] = $(type_pair[1])(8.168475729804590E-01, 9.157621350977100E-02)
      ξs[5] = $(type_pair[1])(9.157621350977100E-02, 8.168475729804590E-01)
      ξs[6] = $(type_pair[1])(9.157621350977100E-02, 9.157621350977100E-02)

      ws    = $(type_pair[2])[
        1.116907948390055E-01,
        1.116907948390055E-01,
        1.116907948390055E-01,
        5.497587182766100E-02,
        5.497587182766100E-02,
        5.497587182766100E-02
      ]
    elseif degree(e) <= 5
      # ξs = Ftype[
      #   3.33333333333333E-01 5.97158717897700E-02 4.70142064105115E-01 4.70142064105115E-01 7.97426985353087E-01 1.01286507323456E-01 1.01286507323456E-01;
      #   3.33333333333333E-01 4.70142064105115E-01 5.97158717897700E-02 4.70142064105115E-01 1.01286507323456E-01 7.97426985353087E-01 1.01286507323456E-01
      # ]
      ξs    = Vector{$(type_pair[1])}(undef, 7)
      ξs[1] = $(type_pair[1])(3.33333333333333E-01, 3.33333333333333E-01)
      ξs[2] = $(type_pair[1])(5.97158717897700E-02, 4.70142064105115E-01)
      ξs[3] = $(type_pair[1])(4.70142064105115E-01, 5.97158717897700E-02)
      ξs[4] = $(type_pair[1])(4.70142064105115E-01, 4.70142064105115E-01)
      ξs[5] = $(type_pair[1])(7.97426985353087E-01, 1.01286507323456E-01)
      ξs[6] = $(type_pair[1])(1.01286507323456E-01, 7.97426985353087E-01)
      ξs[7] = $(type_pair[1])(1.01286507323456E-01, 1.01286507323456E-01)

      ws    = $(type_pair[2])[
        1.12500000000000E-01,
        6.61970763942530E-02,
        6.61970763942530E-02,
        6.61970763942530E-02,
        6.29695902724135E-02,
        6.29695902724135E-02,
        6.29695902724135E-02
      ]
    elseif degree(e) <= 6
      # ξs = Ftype[
      #   5.01426509658179E-01 2.49286745170910E-01 2.49286745170910E-01 8.73821971016996E-01 6.30890144915020E-02 6.30890144915020E-02 5.31450498448170E-02 6.36502499121399E-01 3.10352451033784E-01 5.31450498448170E-02 6.36502499121399E-01 3.10352451033784E-01;
      #   2.49286745170910E-01 5.01426509658179E-01 2.49286745170910E-01 6.30890144915020E-02 8.73821971016996E-01 6.30890144915020E-02 3.10352451033784E-01 5.31450498448170E-02 6.36502499121399E-01 6.36502499121399E-01 3.10352451033784E-01 5.31450498448170E-02
      # ]
      ξs     = Vector{$(type_pair[1])}(undef, 12)
      ξs[1]  = $(type_pair[1])(5.01426509658179E-01, 2.49286745170910E-01)
      ξs[2]  = $(type_pair[1])(2.49286745170910E-01, 5.01426509658179E-01)
      ξs[3]  = $(type_pair[1])(2.49286745170910E-01, 2.49286745170910E-01)
      ξs[4]  = $(type_pair[1])(8.73821971016996E-01, 6.30890144915020E-02)
      ξs[5]  = $(type_pair[1])(6.30890144915020E-02, 8.73821971016996E-01)
      ξs[6]  = $(type_pair[1])(6.30890144915020E-02, 6.30890144915020E-02)
      ξs[7]  = $(type_pair[1])(5.31450498448170E-02, 3.10352451033784E-01)
      ξs[8]  = $(type_pair[1])(6.36502499121399E-01, 5.31450498448170E-02)
      ξs[9]  = $(type_pair[1])(3.10352451033784E-01, 6.36502499121399E-01)
      ξs[10] = $(type_pair[1])(5.31450498448170E-02, 6.36502499121399E-01)
      ξs[11] = $(type_pair[1])(6.36502499121399E-01, 3.10352451033784E-01)
      ξs[12] = $(type_pair[1])(3.10352451033784E-01, 5.31450498448170E-02)

      ws     = $(type_pair[2])[
        5.83931378631895E-02,
        5.83931378631895E-02,
        5.83931378631895E-02,
        2.54224531851035E-02,
        2.54224531851035E-02,
        2.54224531851035E-02,
        4.14255378091870E-02,
        4.14255378091870E-02,
        4.14255378091870E-02,
        4.14255378091870E-02,
        4.14255378091870E-02,
        4.14255378091870E-02
      ]
    else
      throw(ErrorException("Unsupported quadrature degree."))
    end
    return ξs, ws
  end
end